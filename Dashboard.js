const productElements = document.querySelectorAll('.h1Element');
const billContainer = document.querySelector('.bill-container .conatiner');
const productPrices = { "Pepsi": 2, "Miranda": 1.5, "Seven Up": 2, "Water": 1 };
const billItems = {};

const totalRow = document.createElement('div');
totalRow.classList.add('row', 'mt-2', 'total-row');

const totalLabelCell = document.createElement('div');
totalLabelCell.classList.add('col-lg-8', 'col-md-8', 'col-sm-8');
totalLabelCell.textContent = "Total";

const totalValueCell = document.createElement('div');
totalValueCell.classList.add('col-lg-4', 'col-md-4', 'col-sm-4');
totalValueCell.textContent = "0.00";

totalRow.appendChild(totalLabelCell);
totalRow.appendChild(totalValueCell);
billContainer.appendChild(totalRow);

function updateTotal() {
    let total = 0;
    for (const item in billItems) {
        total += billItems[item].quantity * productPrices[item];
    }
    totalValueCell.textContent = total.toFixed(2);
}

productElements.forEach(product => {
    product.addEventListener('click', () => {
        const productName = product.textContent.trim();
        const productPrice = productPrices[productName];

        if (billItems[productName]) {
            billItems[productName].quantity += 1;
            billItems[productName].quantityCell.textContent = billItems[productName].quantity;
            billItems[productName].priceCell.textContent = (billItems[productName].quantity * productPrice).toFixed(2);
        } else {
            const row = document.createElement('div');
            row.classList.add('row', 'mt-2');

            const nameCell = document.createElement('div');
            nameCell.classList.add('col-lg-4', 'col-md-4', 'col-sm-4');
            nameCell.textContent = productName;

            const quantityCell = document.createElement('div');
            quantityCell.classList.add('col-lg-4', 'col-md-4', 'col-sm-4');
            quantityCell.textContent = 1;

            const priceCell = document.createElement('div');
            priceCell.classList.add('col-lg-4', 'col-md-4', 'col-sm-4');
            priceCell.textContent = productPrice.toFixed(2);

            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            billContainer.insertBefore(row, totalRow);

            billItems[productName] = {
                quantity: 1,
                quantityCell: quantityCell,
                priceCell: priceCell
            };
        }
        updateTotal();
    });
});