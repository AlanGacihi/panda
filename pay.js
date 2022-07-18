let total = document.querySelector('.price');

kshs = localStorage.getItem("totalCost");
if (kshs === null)
{
    kshs = 0;
}

total.innerHTML += kshs;