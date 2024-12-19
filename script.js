  function orderSet(setId) {
    let setName, price;

    
    switch (setId) {
      case 1:  setName = "Qiyqiriq сет: 45000 сум"; break;
      case 2:  setName = "Снек сет: 79000 сум"; break;
      case 3:  setName = "Классик сет: 34000 сум"; break;
      case 4:  setName= "Лонгер рингс сет: 45000 сум"; break;
      case 5:  setName = "Биг сет: 62000 сум"; break;
      case 6:  setName = "Лестер сет: 53000 сум"; break;
      case 7:  setName = "Скул сет: 36000 сум"; break;
      case 8:  setName = "Комбо сет Большой: 20000 сум"; break;
      case 9:  setName = "Do’stlar 1х: 43000 сум"; break;
      case 10: setName = "Do’stlar 2х: 79000 сум"; break;
      case 11: setName = "Do’stlar 4х: 149000 сум"; break;
      case 12: setName = "Острый Do’stlar 1х: 43000 сум "; break;
      default:
        alert("Неизвестный сет. Попробуйте еще раз!");
        return;
    }

    let quantity =(prompt(`Вы выбрали "${setName}". Сколько сетов вы хотите заказать?`, "1"));

    switch (true) {
      case isNaN(quantity):
      case quantity <= 0:
        alert("Неверное количество. Заказ отменен.");
        return;
    }
    let total = price * quantity;
    let confirmOrder = confirm(
      `Вы выбрали ${quantity} шт. "${setName}".\nОбщая сумма: ${total} сум.\nПодтвердить заказ?`
    );
    switch (confirmOrder) {
      case true:
        alert(`Ваш заказ на ${quantity} шт. "${setName}" принят. Общая сумма: ${total} сум.`);
        break;
      case false:
        alert("Вы отменили заказ.");
        break;
    }
  }
