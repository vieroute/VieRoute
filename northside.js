document.addEventListener('DOMContentLoaded', () => {
    const bacBoButton = document.getElementById('bac-bo-button');
    const bacBoContent = document.getElementById('bac-bo-content');

    bacBoButton.addEventListener('click', () => {
        if (bacBoContent.innerHTML === '') {
            bacBoContent.innerHTML = `
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vùng Bắc Bộ Việt Nam, 
                    gồm các tỉnh và thành phố nằm ở phía bắc tỉnh Thanh Hóa, trong đó có 3 tiểu vùng:
                </p>
                <ul>
                    <li>
                        Vùng Đồng bằng sông Hồng gồm 10 tỉnh và thành phố: Thái Bình, 
                        Nam Định, Ninh Bình, Hà Nam, Hà Nội, Vĩnh Phúc, Bắc Ninh, Hưng
                        Yên, Hải Dương, Hải Phòng
                    </li>
                    <li>
                        Vùng Tây Bắc gồm 6 tỉnh: Lào Cai, Lai Châu, Điện Biên, Sơn La, 
                        Hòa Bình, Yên Bái
                    </li>
                    <li>
                        Vùng Đông Bắc gồm 9 tỉnh: Hà Giang, Cao Bằng, Bắc Kạn, Lạng Sơn, 
                        Tuyên Quang, Thái Nguyên, Phú Thọ, Bắc Giang, Quảng Ninh.
                    </li>
                </ul>
            `;
        } else {
            bacBoContent.innerHTML = '';
        }
    });

    const trungBoButton = document.getElementById('trung-bo-button');
    const trungBoContent = document.getElementById('trung-bo-content');

    trungBoButton.addEventListener('click', () => {
        if (trungBoContent.innerHTML === '') {
            trungBoContent.innerHTML = `
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trung Bộ, có phía Bắc giáp
                    khu vực đồng bằng Sông Hồng và Trung du miền núi vùng Bắc Bộ; phía Nam
                    giáp các tỉnh Bình Phước, Đồng Nai và Bà Rịa-Vũng Tàu; phía
                    Đông giáp Biển Đông; phía Tây giáp Lào và Campuchia, gồm 3 khu vực cơ bản là:
                </p>
                <ul>
                    <li>
                        Bắc Trung Bộ Việt Nam gồm có 6 tỉnh: Thanh Hoá, Nghệ An, Hà Tĩnh,
                        Quảng Bình, Quảng Trị và Thừa Thiên-Huế.
                    </li>
                    <li>
                        Nam Trung Bộ Việt Nam gồm 8 tỉnh: Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hoà, Ninh Thuận và 
                        Bình Thuận.
                    </li>
                    <li>
                        Tây Nguyên gồm 5 tỉnh: Kon Tum, Gia Lai, Đắk Lắk, Đắc Nông và Lâm Đồng.
                    </li>
                </ul>
            `;
        } else {
            trungBoContent.innerHTML = '';
        }
    });

    const namBoButton = document.getElementById('nam-bo-button');
    const namBoContent = document.getElementById('nam-bo-content');

    namBoButton.addEventListener('click', () => {
        if (namBoContent.innerHTML === '') {
            namBoContent.innerHTML = `
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vùng Nam Bộ 
                    phía tây giáp Vịnh Thái Lan, phía Đông và Đông Nam giáp biển Đông, phía Bắc
                    và Tây Bắc giáp Campuchia và phía Đông Bắc giáp với Duyên Hải Nam Trung Bộ và Tây Nguyên, gồm 19 tỉnh và thành phố:
                </p>
                <ul>
                    <li>
                        Đông Nam Bộ gồm có 1 thành phố là 
                        Thành phố Hồ Chí Minh và 5 tỉnh: Bà Rịa – Vũng Tàu, Bình Dương, Bình Phước, Đồng Nai và Tây Ninh.
                    </li>
                    <li>
                        Đồng bằng sông Cửu Long gồm có 1 thành phố
                        là Cần Thơ và 12 tỉnh: Long An, Đồng Tháp, An Giang, Tiền Giang, Bến Tre, Vĩnh Long, 
                        Trà Vinh, Hậu Giang, Kiên Giang, Sóc Trăng, Bạc Liêu và Cà Mau.
                    </li>
                </ul>
            `;
        } else {
            namBoContent.innerHTML = '';
        }
    });
});
