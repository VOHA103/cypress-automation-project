describe('Kiểm thử chức năng Đăng xuất - LMS XHeroApp', () => {
  it('Đăng nhập vào hệ thống sau đó thực hiện Đăng xuất', () => {
    // 1. Truy cập trang web
    cy.visit('https://lms.xheroapp.com/en'); 

    // 2. Thực hiện đăng nhập
    cy.contains('ĐĂNG nhập', { matchCase: false }).click();
    cy.get('input[name="username"]').type('thaydichhoc02@xherozone.com');
    cy.get('input[name="password"]').type('111111');
    cy.get('button[type="submit"]').click();

   // Xác nhận đã đăng nhập thành công
    cy.contains('ĐĂNG NHẬP').should('not.exist');

    // 3. Thực hiện Đăng xuất
    cy.get('img[src*="defaultAvt"]').first().click({ force: true });
    cy.scrollTo('bottom'); 
    cy.contains('Đăng xuất', { matchCase: false }).click({ force: true });

    // 4. Kiểm tra sau khi đăng xuất thành công
    // Chờ cho trang web load lại ổn định và kiểm tra nút ĐĂNG NHẬP xuất hiện trở lại
    cy.contains('ĐĂNG NHẬP', { matchCase: false, timeout: 10000 }).should('be.visible');
  });
});