document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener datos de la tarjeta (esto es solo para pruebas, en producción se usa una API de pagos)
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    console.log(`Tarjeta: ${cardNumber}, Expira: ${expiryDate}, CVV: ${cvv}`);

    // Aquí se enviaría la solicitud al servidor para procesar el pago...
    // Suponemos que el pago se procesa y empieza el envío
    startShippingProcess();
});

function startShippingProcess() {
    // Ocultar el formulario de pago y mostrar el progreso de envío
    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('shippingProgress').style.display = 'block';

    const steps = [
        { step: 'step1', delay: 1000 },
        { step: 'step2', delay: 3000 },
        { step: 'step3', delay: 5000 },
        { step: 'step4', delay: 8000 }
    ];

    // Simular actualización de envío en tiempo real
    steps.forEach(({ step, delay }) => {
        setTimeout(() => {
            document.getElementById(step).classList.add('active');
        }, delay);
    });
}
