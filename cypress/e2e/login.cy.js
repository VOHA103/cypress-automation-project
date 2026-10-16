describe('Kiểm thử chức năng Đăng nhập - LMS XHeroApp', () => {
  it('Mở trang chủ và chuyển đến màn hình Đăng nhập', () => {
    // 1. Truy cập trang web
    cy.visit('/en'); 

    // 2. Click nút Đăng nhập (thêm matchCase: false)
    cy.contains('ĐĂNG nhập', { matchCase: false }).click();

    // 3. Điền thông tin tài khoản
    cy.get('input[name="username"]').type('thaydichhoc02@xherozone.com');
    cy.get('input[name="password"]').type('111111');

    // 4. Nhấn nút đăng nhập trong form
    cy.get('button[type="submit"]').click();

    // 5. Kiểm tra kết quả
    cy.url().should('include', '/en');
  });
});