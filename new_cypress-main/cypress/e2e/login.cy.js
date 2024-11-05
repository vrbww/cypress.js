describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашёл на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //ввёл верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввёл верный пароль 
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что есть такой текст
         cy.get('#messageHeader').should('be.visible'); // текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашёл на сайт
        cy.get('#forgotEmailButton').click(); // нажал на забыли пароль
        cy.get('#mailForgot').type('man@kov.ru') // ввёл email в инпут
        cy.get('#restoreEmailButton').click(); // нажал на отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка по тексту
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашёл на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввёл верный логин
        cy.get('#pass').type('iLoveqastudio'); // ввёл НЕверный пароль 
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что есть такой текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашёл на сайт
        cy.get('#mail').type('german@dol.ru'); //ввёл НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввёл верный пароль 
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что есть такой текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
    })

    it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // зашёл на сайт
        cy.get('#mail').type('germandolnikov.ru'); //ввёл невалидный логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввёл верный пароль 
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что есть такой текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
    })

    it('Проверка строчных букв в логине', function () {
      cy.visit('https://login.qa.studio/'); // зашёл на сайт
       cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввёл верный логин, но с заглавными буквами
       cy.get('#pass').type('iLoveqastudio1'); // ввёл верный пароль 
       cy.get('#loginButton').click(); // нажал войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что есть такой текст
       cy.get('#messageHeader').should('be.visible'); // текст виден
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
    })
})
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 