 
const precio_litro = document.getElementById("PRefPagProd").getContext("2d");
const graf_precio_litro = new Chart(precio_litro, {
type: 'bar',
data: {
labels: ['Sep 23','Oct 23','Nov 23','Dic 23','Ene 24','Feb 24','Mar 24','Abr 24','May 24','Jun 24','Jul 24','Ago 24','Sep 24'],
datasets: [{
    label: 'Valores en pesos $',
    data: [122.66,133.39,151.47,193.79,246.11,298.57,342.39,368.87,401.26,421.8,430.58,441.6,443.85],
    backgroundColor: [
        'rgba(0,55,203,0.5)',
    ],
    borderColor: [
        'rgba(0,55,203,1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
}
);



const produccion_mensual = document.getElementById("lech_crud").getContext("2d");
const graf_produccion_mensual = new Chart(produccion_mensual, {
type: 'bar',
data: {
labels: ['Sep 23','Oct 23','Nov 23','Dic 23','Ene 24','Feb 24','Mar 24','Abr 24','May 24','Jun 24','Jul 24','Ago 24','Sep 24'],
datasets: [{
    label: 'Producción mensual de leche cruda en millones de litros',
    data:  [212.88,223.64,207.35,195.98,174.88,146.65,161.14,156.5,166.62,170.53,192.91,206.94,217.34],
    backgroundColor: [
        'rgba(255,120,0,0.5)',
    ],
    borderColor: [
        'rgba(255,120,0,1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
}
);

const solidos_utiles = document.getElementById("graf_solidos_Utiles").getContext("2d");
const graf_solidos_utiles = new Chart(solidos_utiles, {
type: 'line',
data: {
labels: ['Sep 23','Oct 23','Nov 23','Dic 23','Ene 24','Feb 24','Mar 24','Abr 24','May 24','Jun 24','Jul 24','Ago 24','Sep 24'],
datasets: [{
    label: '% Solidos Útiles',
    data:  [7.24,7.20,7.19,7.13,7.07,7.23,7.3,7.45,7.56,7.45,7.41,7.32,7.24],
    backgroundColor: [
        'rgba(255,173,0,0.5)',
    ],
    borderColor: [
        'rgba(255,173,0,1)',
        
    ],
    borderWidth: 2
    
}]
},
options: {
scales: {
    y: {
        beginAtZero: false
    }
}
}
}
);



