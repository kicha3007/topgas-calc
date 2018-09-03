$(function () {
    var substitutionInp = $("[data-calc-input='substitution']"),
        runInp = $("[data-calc-input='run']"),
        yearRunInp = $("[data-calc-input='year-run']"),
        consumptionFuelInp = $("[data-calc-input='consumption-fuel']"),
        priceLiterFuelInp = $("[data-calc-input='price-liter-fuel']"),
        priceCubeFuelInp = $("[data-calc-input='price-cube-fuel']"),
        savingMoneyInp = $("[data-calc-input='saving-money']"),
        cylinderVolumeInp = $("[data-calc-input='cylinder-volume']"),
        priceInstallationInp = $("[data-calc-input='price-installation']"),
        recoupmentDistanceInp = $("[data-calc-input='recoupment-distance']"),
        numberOfCylindersInp = $("[data-calc-input='number-of-cylinders']"),
        recoupmentMonthInp = $("[data-calc-input='recoupment-month']"),
        priceLiterInp = $("[data-calc-input='price-liter']"),
        priceValveInp = $("[data-calc-input='price-valve']"),
        priceElectricalKitInp = $("[data-calc-input='price-electrical-kit']"),
        priceJobsInp = $("[data-calc-input='price-jobs']"),
        priceFrameInp = $("[data-calc-input='price-frame']");

    function calcStart() {
        
        var substitutionVal = +substitutionInp.val(),
            consumptionFuelVal = +consumptionFuelInp.val(),
            priceLiterFuelVal = +priceLiterFuelInp.val(),
            runVal = +runInp.val(),
            yearRunVal = +yearRunInp.val(),
            priceLiterVal = +priceLiterInp.val(),
            cylinderVolumeVal = +cylinderVolumeInp.val(),
            priceValveVal = +priceValveInp.val(),
            priceElectricalKitVal = +priceElectricalKitInp.val(),
            priceJobsVal =  +priceJobsInp.val(),
            priceCubeFuelVal = +priceCubeFuelInp.val(),
            priceFrameInpVal = +priceFrameInp.val();
            
        

        var methaneConsumption = substitutionVal * consumptionFuelVal,
        priceDtOnDisiel = consumptionFuelVal * priceLiterFuelVal,
        priceCNG = methaneConsumption * priceCubeFuelVal,
        priceFuelOnDisiel = priceCNG + priceDtOnDisiel * (1 - substitutionVal);

        var priceFueling = priceDtOnDisiel * runVal / 100;
        var priceOneFueling = priceFuelOnDisiel * runVal / 100;
        var economyOnFueling = (priceDtOnDisiel - priceFuelOnDisiel) * runVal / 100;

        var savingMoneyVal = (priceDtOnDisiel - priceFuelOnDisiel) * yearRunVal * 10,
            mustMethane = methaneConsumption * runVal / 100,
            mustLiter = mustMethane * 6,
            priceCylinders = priceLiterVal * mustLiter,
            priceValves = Math.ceil(((mustLiter / cylinderVolumeVal * priceValveVal) / 1000)) * 1000,
            priceInstallationVal = priceJobsVal + priceValves + priceCylinders + priceElectricalKitVal + priceFrameInpVal,
            recoupmentDistanceVal = Math.ceil(priceInstallationVal / (priceDtOnDisiel - priceFuelOnDisiel) * 100 / 1000),
            numberOfCylindersVal = Math.ceil(mustLiter / cylinderVolumeVal),
            recoupmentMonthVal = recoupmentDistanceVal / (yearRunVal / 12);

            savingMoneyInp.val(savingMoneyVal + " руб.");
            priceInstallationInp.val(priceInstallationVal + " руб.");
            recoupmentDistanceInp.val(recoupmentDistanceVal);
            numberOfCylindersInp.val(numberOfCylindersVal);
            recoupmentMonthInp.val(recoupmentMonthVal);
    }

    calcStart();

    $('[data-calc-input]').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9\.]/g)) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        }
        calcStart();
    });

});