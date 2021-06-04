$(function(){

    let quantityBurger  = $('.burgerQuantity');
    let quantityDoubleCheeseBurger  = $('.DoubleCheeseBurgerQuantity');
    let quantityHotDog  = $('.HotDogBurger');
    let quantityDoner  = $('.DonerBurger');
    let priceBurger = 1000;
    let priceDouble = 1500;
    let priceHotDog = 700;
    let priceDoner = 900;
    let total = 0;

    quantityBurger.on('change',function (){
        if(quantityBurger.val() >= 0)
        {
            $(".priceBurger").text(priceBurger * quantityBurger.val())
            total = priceBurger * quantityBurger.val() + priceDouble * quantityDoubleCheeseBurger.val()
                + priceHotDog * quantityHotDog.val() + priceDoner * quantityDoner.val();
            $('.total').text(total);
            $('.total').val(total);
        }

    })

    quantityDoubleCheeseBurger.on('change',function (){
        if(quantityDoubleCheeseBurger.val() >= 0)
        {
            $(".priceDoubleCheeseBurger").text(priceDouble * quantityDoubleCheeseBurger.val())
            total = priceBurger * quantityBurger.val() + priceDouble * quantityDoubleCheeseBurger.val()
                + priceHotDog * quantityHotDog.val() + priceDoner * quantityDoner.val();
            $('.total').text(total);
            $('.total').val(total);
        }
    })



    quantityHotDog.on('change',function (){
        if(quantityHotDog.val() >= 0)
        {
            $(".priceHotDog").text(priceHotDog * quantityHotDog.val())
            total = priceBurger * quantityBurger.val() + priceDouble * quantityDoubleCheeseBurger.val()
                + priceHotDog * quantityHotDog.val() + priceDoner * quantityDoner.val();
            $('.total').text(total);
            $('.total').val(total);
        }
    })

    quantityDoner.on('change',function (){
        if(quantityDoner.val() >= 0)
        {
            $(".priceDoner").text(priceDoner * quantityDoner.val())
            total = priceBurger * quantityBurger.val() + priceDouble * quantityDoubleCheeseBurger.val()
                + priceHotDog * quantityHotDog.val() + priceDoner * quantityDoner.val();
            $('.total').text(total);
            $('.total').val(total);
        }
    })
});
