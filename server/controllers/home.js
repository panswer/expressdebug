const ViewHome = (req, res) => {
    try {
        let num1 = 1;
        let num2 = 3;

        let result = num1 + num2;

        res.render('home');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    ViewHome
}