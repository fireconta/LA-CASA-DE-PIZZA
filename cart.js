// Dados iniciais do carrinho e estoque
let cart = [];
let stock = {
    casal: 10,
    familia: 10,
    supremo: 5,
    calabresa: 20,
    margherita: 20,
    quatroqueijos: 20,
    frangocatupiry: 20,
    portuguesa: 20,
    chocolate: 15,
    brigadeiro: 15,
    banana: 15,
    morango: 15
};
const MINIMUM_ORDER = 10.00;
let pendingCombo = null;

// Sabores disponíveis para combos
const pizzaFlavors = {
    traditional: [
        { name: 'Pizza de Calabresa', price: 39.90 },
        { name: 'Pizza Margherita', price: 42.90 },
        { name: 'Pizza Quatro Queijos', price: 45.90 },
        { name: 'Pizza de Frango com Catupiry', price: 43.90 },
        { name: 'Pizza Portuguesa', price: 44.90 }
    ],
    sweet: [
        { name: 'Pizza de Chocolate', price: 29.90 },
        { name: 'Pizza de Brigadeiro', price: 32.90 },
        { name: 'Pizza de Banana com Canela', price: 31.90 },
        { name: 'Pizza de Morango com Chocolate', price: 34.90 }
    ]
};

// Função para sanitizar HTML
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Função debounce para evitar cliques repetidos
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Validação e carregamento do localStorage
function loadStorage() {
    try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
            if (!Array.isArray(cart)) throw new Error('Dados do carrinho inválidos');
        }
        const storedStock = localStorage.getItem('stock');
        if (storedStock) {
            const parsedStock = JSON.parse(storedStock);
            if (typeof parsedStock === 'object') {
                Object.keys(stock).forEach(key => {
                    if (parsedStock[key] !== undefined && parsedStock[key] >= 0) {
                        stock[key] = parsedStock[key];
                    }
                });
            }
        }
    } catch (error) {
        console.error('Erro ao carregar dados do localStorage:', error);
        localStorage.removeItem('cart');
        localStorage.removeItem('stock');
    }
}

// Abrir modal de sabores para combos
function openFlavorModal(name, price, stockKey, pizzaCounts) {
    try {
        if (stockKey && stock[stockKey] <= 0) {
            showNotification(`Desculpe, ${escapeHTML(name)} está esgotado!`, true);
            return;
        }

        pendingCombo = { name, price, stockKey, pizzaCounts, flavors: [] };
        const flavorSelections = document.getElementById('flavor-selections');
        flavorSelections.innerHTML = '';

        for (let i = 0; i < pizzaCounts.traditional; i++) {
            const label = document.createElement('label');
            label.textContent = `Pizza Tradicional ${i + 1}:`;
            const select = document.createElement('select');
            select.id = `traditional-flavor-${i}`;
            select.setAttribute('aria-label', `Selecione o sabor da pizza tradicional ${i + 1}`);
            select.innerHTML = '<option value="">Selecione um sabor tradicional</option>';
            pizzaFlavors.traditional.forEach(flavor => {
                select.innerHTML += `<option value="${escapeHTML(flavor.name)}">${escapeHTML(flavor.name)}</option>`;
            });
            flavorSelections.appendChild(label);
            flavorSelections.appendChild(select);
        }

        for (let i = 0; i < pizzaCounts.sweet; i++) {
            const label = document.createElement('label');
            label.textContent = `Pizza Doce ${i + 1}:`;
            const select = document.createElement('select');
            select.id = `sweet-flavor-${i}`;
            select.setAttribute('aria-label', `Selecione o sabor da pizza doce ${i + 1}`);
            select.innerHTML = '<option value="">Selecione um sabor doce</option>';
            pizzaFlavors.sweet.forEach(flavor => {
                select.innerHTML += `<option value="${escapeHTML(flavor.name)}">${escapeHTML(flavor.name)}</option>`;
            });
            flavorSelections.appendChild(label);
            flavorSelections.appendChild(select);
        }

        const flavorModal = document.getElementById('flavor-modal');
        flavorModal.classList.add('active');
        flavorModal.setAttribute('aria-hidden', 'false');
        const firstSelect = flavorSelections.querySelector('select');
        if (firstSelect) firstSelect.focus();
    } catch (error) {
        console.error('Erro ao abrir modal de sabores:', error);
        showNotification('Erro ao abrir seleção de sabores!', true);
    }
}

// Confirmar sabores selecionados
function confirmFlavors() {
    try {
        const flavorSelections = document.getElementById('flavor-selections').querySelectorAll('select');
        const flavors = [];
        let valid = true;

        flavorSelections.forEach(select => {
            if (!select.value) valid = false;
            flavors.push(select.value);
        });

        if (!valid) {
            showNotification('Por favor, selecione todos os sabores!', true);
            return;
        }

        pendingCombo.flavors = flavors;
        addToCart(pendingCombo.name, pendingCombo.price, pendingCombo.stockKey, pendingCombo.flavors);
        closeFlavorModal();
    } catch (error) {
        console.error('Erro ao confirmar sabores:', error);
        showNotification('Erro ao confirmar sabores!', true);
    }
}

// Fechar modal de sabores
function closeFlavorModal() {
    try {
        const flavorModal = document.getElementById('flavor-modal');
        flavorModal.classList.remove('active');
        flavorModal.setAttribute('aria-hidden', 'true');
        document.getElementById('flavor-selections').innerHTML = '';
        if (pendingCombo && pendingCombo.name) {
            const activeButton = document.querySelector(`button[data-combo-name="${pendingCombo.name}"]`);
            if (activeButton) activeButton.focus();
        }
        pendingCombo = null;
    } catch (error) {
        console.error('Erro ao fechar modal de sabores:', error);
    }
}

// Adicionar item ao carrinho
function addToCart(name, price, stockKey, flavors = []) {
    let button = null;
    try {
        if (stockKey) {
            button = document.querySelector(`button[data-combo-stock="${stockKey}"], button[data-item-stock="${stockKey}"]`);
            if (button) button.classList.add('loading');
        }

        if (stockKey && (!stock[stockKey] || stock[stockKey] <= 0)) {
            showNotification(`Desculpe, ${escapeHTML(name)} está esgotado!`, true);
            return;
        }

        const existingItem = cart.find(item => item.name === name && JSON.stringify(item.flavors) === JSON.stringify(flavors));
        if (existingItem) {
            if (stockKey && existingItem.quantity >= stock[stockKey]) {
                showNotification(`Limite de estoque atingido para ${escapeHTML(name)}! Máximo: ${stock[stockKey]}`, true);
                return;
            }
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price: parseFloat(price), quantity: 1, stockKey, flavors });
        }

        if (stockKey) {
            stock[stockKey] -= 1;
            updateStockDisplay(stockKey);
            localStorage.setItem('stock', JSON.stringify(stock));
        }

        updateCart();
        showNotification(`Adicionado: ${escapeHTML(name)}`, false, true);
    } catch (error) {
        console.error('Erro ao adicionar ao carrinho:', error);
        showNotification('Erro ao adicionar item ao carrinho!', true);
    } finally {
        if (button) {
            setTimeout(() => button.classList.remove('loading'), 500);
        }
    }
}

// Atualizar quantidade de um item
function updateQuantity(name, flavors, change) {
    try {
        const item = cart.find(item => item.name === name && JSON.stringify(item.flavors) === JSON.stringify(flavors));
        if (!item) return;

        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
            removeFromCart(name, flavors);
            return;
        }

        if (item.stockKey && newQuantity > stock[item.stockKey] + item.quantity) {
            showNotification(`Limite de estoque atingido para ${escapeHTML(name)}! Máximo: ${stock[item.stockKey] + item.quantity}`, true);
            return;
        }

        if (item.stockKey) {
            stock[item.stockKey] += (item.quantity - newQuantity);
            updateStockDisplay(item.stockKey);
            localStorage.setItem('stock', JSON.stringify(stock));
        }

        item.quantity = newQuantity;
        updateCart();
        showNotification(`Quantidade atualizada: ${escapeHTML(name)}`, false, true);
    } catch (error) {
        console.error('Erro ao atualizar quantidade:', error);
        showNotification('Erro ao atualizar quantidade!', true);
    }
}

// Remover item do carrinho
function removeFromCart(name, flavors) {
    try {
        const item = cart.find(item => item.name === name && JSON.stringify(item.flavors) === JSON.stringify(flavors));
        if (item && item.stockKey) {
            stock[item.stockKey] += item.quantity;
            updateStockDisplay(item.stockKey);
            localStorage.setItem('stock', JSON.stringify(stock));
        }
        cart = cart.filter(item => !(item.name === name && JSON.stringify(item.flavors) === JSON.stringify(flavors)));
        updateCart();
        showNotification(`Removido: ${escapeHTML(name)}`, false, true);
    } catch (error) {
        console.error('Erro ao remover do carrinho:', error);
        showNotification('Erro ao remover item!', true);
    }
}

// Abrir modal de confirmação para limpar carrinho
function openConfirmClearModal() {
    try {
        if (cart.length === 0) {
            showNotification('O carrinho já está vazio!', true);
            return;
        }
        const confirmModal = document.getElementById('confirm-clear-modal');
        confirmModal.classList.add('active');
        confirmModal.setAttribute('aria-hidden', 'false');
        document.getElementById('confirm-clear-btn').focus();
    } catch (error) {
        console.error('Erro ao abrir modal de confirmação:', error);
        showNotification('Erro ao abrir confirmação!', true);
    }
}

// Confirmar limpeza do carrinho
function confirmClearCart() {
    try {
        cart.forEach(item => {
            if (item.stockKey) {
                stock[item.stockKey] += item.quantity;
                updateStockDisplay(item.stockKey);
            }
        });
        cart = [];
        updateCart();
        closeConfirmClearModal();
        showNotification('Carrinho limpo!', false, true);
    } catch (error) {
        console.error('Erro ao limpar carrinho:', error);
        showNotification('Erro ao limpar carrinho!', true);
    }
}

// Fechar modal de confirmação
function closeConfirmClearModal() {
    try {
        const confirmModal = document.getElementById('confirm-clear-modal');
        confirmModal.classList.remove('active');
        confirmModal.setAttribute('aria-hidden', 'true');
        document.getElementById('clear-cart-btn').focus();
    } catch (error) {
        console.error('Erro ao fechar modal de confirmação:', error);
    }
}

// Atualizar exibição de estoque
function updateStockDisplay(stockKey) {
    try {
        const stockElement = document.getElementById(`stock-${stockKey}`);
        const button = document.querySelector(`button[data-combo-stock="${stockKey}"], button[data-item-stock="${stockKey}"]`);
        if (stockElement) {
            stockElement.textContent = `Restam ${stock[stockKey]} unidades`;
        }
        if (button) {
            button.disabled = stock[stockKey] <= 0;
        }
    } catch (error) {
        console.error('Erro ao atualizar estoque:', error);
    }
}

// Atualizar carrinho na interface
function updateCart() {
    try {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.getElementById('cart-count');
        const checkoutBtn = document.getElementById('checkout-btn');
        const minimumOrderMessage = document.getElementById('minimum-order-message');

        let total = 0;
        cartItems.innerHTML = '';

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.dataset.index = index;
            const flavorText = item.flavors.length > 0 ? `<span>Sabores: ${item.flavors.map(escapeHTML).join(', ')}</span>` : '';
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <span>${escapeHTML(item.name)}</span>
                    ${flavorText}
                    <span>R$ ${itemTotal.toFixed(2)}</span>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease-btn" data-index="${index}" aria-label="Reduzir quantidade de ${escapeHTML(item.name)}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-index="${index}" aria-label="Aumentar quantidade de ${escapeHTML(item.name)}">+</button>
                    <button class="remove-from-cart" data-index="${index}" aria-label="Remover ${escapeHTML(item.name)} do carrinho">Remover</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        const isBelowMinimum = total < MINIMUM_ORDER;
        checkoutBtn.disabled = isBelowMinimum;
        minimumOrderMessage.classList.toggle('visible', isBelowMinimum);
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Erro ao atualizar carrinho:', error);
        showNotification('Erro ao atualizar carrinho!', true);
    }
}

// Alternar visibilidade do carrinho
function toggleCart() {
    try {
        const cart = document.getElementById('cart');
        cart.classList.toggle('active');
        if (cart.classList.contains('active')) {
            cart.setAttribute('aria-hidden', 'false');
            document.getElementById('clear-cart-btn').focus();
        } else {
            cart.setAttribute('aria-hidden', 'true');
            document.getElementById('cart-toggle-btn').focus();
        }
    } catch (error) {
        console.error('Erro ao alternar carrinho:', error);
    }
}

// Abrir modal de checkout
function openCheckoutModal() {
    try {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        if (total < MINIMUM_ORDER) {
            showNotification('O pedido mínimo é R$ 10,00!', true);
            return;
        }
        const checkoutModal = document.getElementById('checkout-modal');
        checkoutModal.classList.add('active');
        checkoutModal.setAttribute('aria-hidden', 'false');
        toggleCart();
        document.getElementById('name').focus();
    } catch (error) {
        console.error('Erro ao abrir checkout:', error);
        showNotification('Erro ao abrir checkout!', true);
    }
}

// Fechar modal de checkout
function closeCheckoutModal() {
    try {
        const checkoutModal = document.getElementById('checkout-modal');
        checkoutModal.classList.remove('active');
        checkoutModal.setAttribute('aria-hidden', 'true');
        document.getElementById('name').value = '';
        document.getElementById('address').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('checkout-btn').focus();
    } catch (error) {
        console.error('Erro ao fechar checkout:', error);
    }
}

// Confirmar checkout
function confirmCheckout() {
    try {
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!name || !address || !phone) {
            showNotification('Por favor, preencha todos os campos!', true);
            return;
        }

        const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            showNotification('Telefone inválido! Use o formato (XX) XXXXX-XXXX', true);
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const orderDetails = cart.map(item => {
            const flavorText = item.flavors.length > 0 ? ` (Sabores: ${item.flavors.map(escapeHTML).join(', ')})` : '';
            return `${escapeHTML(item.name)}${flavorText} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}`;
        }).join('<br>');
        const deliveryTime = Math.floor(Math.random() * (50 - 30 + 1)) + 30;

        document.getElementById('confirmation-details').innerHTML = `
            <p><strong>Cliente:</strong> ${escapeHTML(name)}</p>
            <p><strong>Endereço:</strong> ${escapeHTML(address)}</p>
            <p><strong>Telefone:</strong> ${escapeHTML(phone)}</p>
            <p><strong>Itens:</strong><br>${orderDetails}</p>
            <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
            <p><strong>Estimativa de entrega:</strong> ${deliveryTime} minutos</p>
        `;

        document.querySelectorAll('.menu-section').forEach(section => section.classList.remove('active'));
        document.getElementById('cart').classList.remove('active');
        document.getElementById('cart').setAttribute('aria-hidden', 'true');
        document.getElementById('confirmation-page').classList.add('active');
        closeCheckoutModal();

        cart = [];
        updateCart();
        showNotification('Pedido confirmado com sucesso!');
    } catch (error) {
        console.error('Erro ao confirmar checkout:', error);
        showNotification('Erro ao confirmar pedido!', true);
    }
}

// Voltar ao menu
function backToMenu() {
    try {
        document.get
