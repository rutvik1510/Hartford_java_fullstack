
function generateNumber() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 3; i++) {
        code += letters[Math.floor(Math.random() * letters.length)];
    }
    code += Math.floor(100 + Math.random() * 900); // 3 digits
    return code;
}

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


function createPO(trainer, training, paymentType, rate, duration) {
    let totalAmount = 0;

    if (paymentType === "Hourly") {
        totalAmount = rate * duration;
    } else if (paymentType === "Daily") {
        totalAmount = rate * duration;
    } else if (paymentType === "Monthly") {
        totalAmount = rate * duration;
    }

    return {
        poNumber: generateNumber(),
        trainer,
        training,
        paymentType,
        rate,
        duration,
        totalAmount
    };
}


function generateInvoice(po, invoiceDate) {
    let trainingEnd = new Date(po.training.endDate);
    let today = new Date(invoiceDate);

    if (today < trainingEnd) {
        console.log(" Training not completed. Invoice cannot be generated.");
        return null;
    }

    return {
        invoiceNumber: generateNumber(),
        poNumber: po.poNumber,
        trainerName: po.trainer.name,
        courseName: po.training.courseName,
        totalAmount: po.totalAmount,
        invoiceDate: today,
        dueDate: addDays(today, 30),
        status: "UNPAID"
    };
}


function checkOverdue(invoice, currentDate) {
    let today = new Date(currentDate);

    if (invoice.status === "UNPAID" && today > invoice.dueDate) {
        invoice.status = "OVERDUE";
        sendEmail(invoice);
    }
}


function sendEmail(invoice) {
    console.log("EMAIL SENT TO ACCOUNTS TEAM");
    console.log(`Invoice ${invoice.invoiceNumber} is OVERDUE.`);
}




let trainer = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    experience: "8 Years"
};


let training = {
    courseName: "Full Stack JavaScript",
    clientName: "ABC Corp",
    startDate: "2025-01-01",
    endDate: "2025-01-10"
};


let po = createPO(trainer, training, "Daily", 5000, 10);
console.log("Purchase Order Created:", po);


let invoice = generateInvoice(po, "2025-01-12");
console.log("Invoice Generated:", invoice);


checkOverdue(invoice, "2025-02-15");
console.log(" Invoice Status:", invoice.status);