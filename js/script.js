const productList = [
    { id: "01", category: "gundam", name: "Mô hình Gundam RX-78-2", price: "550.000", image: "assets/images/gundam-rx78.jpg", productLink: "html/product-detail.html", desc: "Mô hình Gundam RX-78-2 là biểu tượng huyền thoại của dòng Gunpla, mang thiết kế cổ điển nhưng vô cùng tinh xảo." },
    { id: "02", category: "gundam", name: "Mô hình Gundam Barbatos", price: "450.000", image: "assets/images/gundam-barbatos.jpg", productLink: "html/product-detail.html", desc: "Gundam Barbatos sở hữu vẻ ngoài gai góc và mạnh mẽ đặc trưng từ series Iron-Blooded Orphans." },
    { id: "05", category: "gundam", name: "Mô hình Gundam Wing Zero", price: "1.200.000", image: "assets/images/gundam-wing.jpg", productLink: "html/product-detail.html", desc: "Gundam Wing Zero nổi bật với đôi cánh thiên thần trắng muốt, tạo nên vẻ đẹp sang trọng." },
    { id: "07", category: "gundam", name: "Mô hình Gundam Unicorn", price: "650.000", image: "assets/images/gundam-unicorn.webp", productLink: "html/product-detail.html", desc: "Mô hình Gundam Unicorn gây ấn tượng mạnh với khả năng thay đổi diện mạo giữa chế độ Unicorn và Destroy mode." },
    { id: "09", category: "gundam", name: "Mô hình Gundam Exia", price: "480.000", image: "assets/images/gundam-exia.webp", productLink: "html/product-detail.html", desc: "Gundam Exia với thiết kế thanh mảnh, tập trung vào tốc độ và cận chiến." },
    { id: "16", category: "gundam", name: "Mô hình Gundam Astray Red Dragonics", price: "1.350.000", image: "assets/images/gundam-astray_red_dragonics.webp", productLink: "html/product-detail.html", desc: "Phiên bản tối thượng hoành tráng của dòng Astray Red Frame với bộ ba thanh kiếm Neo Caletvwlch khổng lồ sau lưng. Tông màu đỏ rực rỡ kết hợp cùng các chi tiết cơ khí sắc sảo tạo nên một con quái vật thực sự trên bàn trưng bày." },
    { id: "17", category: "gundam", name: "Mô hình Gundam Avalanche Exia", price: "890.000", image: "assets/images/gundam-Avalanche_Exia.webp", productLink: "html/product-detail.html", desc: "Gundam Exia được trang bị gói nâng cấp giáp nặng Avalanche, mang lại vẻ ngoài vô cùng đồ sộ và cơ bắp. Mô hình tái hiện xuất sắc các khối động cơ phản lực cực đại giúp Exia càn quét mọi chiến trường không trọng lực." },
    { id: "18", category: "gundam", name: "Mô hình Gundam MGSD Freedom Wing", price: "950.000", image: "assets/images/gundam-MGSDWing.webp", productLink: "html/product-detail.html", desc: "Dòng sản phẩm lai cấp tiến giữa Master Grade và Super Deformed. Dù mang tỷ lệ đầu to nhỏ gọn đáng yêu, nhưng mô hình lại sở hữu khung xương bên trong cực kỳ chi tiết, biên độ cử động xuất sắc và đôi cánh dang rộng siêu ngầu." },
    { id: "19", category: "gundam", name: "Mô hình Gundam X1 Full Cloth", price: "1.100.000", image: "assets/images/gundam-X1Full_cross_action.webp", productLink: "html/product-detail.html", desc: "Chiến binh Crossbone X1 với bộ giáp choàng 'Full Cloth' bao bọc toàn thân như một bá tước hải tặc bí ẩn. Các lớp giáp có thể đóng mở linh hoạt để lộ ra kho vũ khí khổng lồ đặc trưng của thế giới cướp biển vũ trụ." },
    { id: "20", category: "gundam", name: "Mô hình Gundam Barbatos Corona Borealis", price: "2.450.000", image: "assets/images/gundam-Mg_barbatos_corona_borealis_resin.webp", productLink: "html/product-detail.html", desc: "Mẫu Gundam Barbatos phiên bản giới hạn độ Resin cao cấp. Toàn bộ các góc cạnh hoang dã của gia tộc sói được đẩy lên đỉnh cao với lớp giáp ngoài gai góc, chi tiết mạ cơ khí đỉnh cấp cùng vũ khí đại đao khổng lồ hủy diệt mọi đối thủ." },

    { id: "03", category: "pokemon", name: "Figure Pokemon Pikachu", price: "250.000", image: "assets/images/pokemon-pikachu.jpg", productLink: "html/product-detail.html", desc: "Figure Pikachu đáng yêu với biểu cảm sống động, là người bạn đồng hành không thể thiếu." },
    { id: "04", category: "pokemon", name: "Figure Pokemon Mewtwo", price: "350.000", image: "assets/images/pokemon-mewtwo.webp", productLink: "html/product-detail.html", desc: "Mewtwo - Pokemon huyền thoại hệ Siêu linh được tái hiện mạnh mẽ trong phiên bản Figure này." },
    { id: "06", category: "pokemon", name: "Figure Pokemon Charizard", price: "400.000", image: "assets/images/pokemon-charizard.jpg", productLink: "html/product-detail.html", desc: "Rồng lửa Charizard với đôi cánh rộng mở và ngọn lửa rực cháy trên đuôi là biểu tượng của sức mạnh." },
    { id: "08", category: "pokemon", name: "Figure Pokemon Lucario", price: "300.000", image: "assets/images/pokemon-lucario.png", productLink: "html/product-detail.html", desc: "Lucario được biết đến with khả năng cảm nhận hào quang, xuất hiện trong mô hình với tư thế sẵn sàng tung đòn." },
    { id: "10", category: "pokemon", name: "Figure Pokemon Rayquaza", price: "500.000", image: "assets/images/pokemon-rayquaza.jpg", productLink: "html/product-detail.html", desc: "Rayquaza - rồng thần bầu trời được tái hiện trong dáng vẻ uốn lượn uyển chuyển nhưng đầy quyền lực." },
    { id: "11", category: "pokemon", name: "Figure Pokemon Bulbasaur", price: "180.000", image: "assets/images/pokemon-bulbasaur.jpg", productLink: "html/product-detail.html", desc: "Pokemon hệ Cỏ Bulbasaur (Ếch Diệu Kỳ) siêu đáng yêu với chiếc nụ hoa nhỏ trên lưng, mang lại cảm giác tươi mát cho bộ sưu tập." },
    { id: "12", category: "pokemon", name: "Figure Pokemon Squirtle", price: "180.000", image: "assets/images/pokemon-squirtle.webp", productLink: "html/product-detail.html", desc: "Rùa con tinh nghịch Squirtle hệ Nước với chiếc mai cứng cáp và tư thế vô cùng lém lỉnh, sẵn sàng cho mọi cuộc vui." },
    { id: "13", category: "pokemon", name: "Figure Pokemon Mega Charizard", price: "450.000", image: "assets/images/pokemon-megacharizard.jpg", productLink: "html/product-detail.html", desc: "Trạng thái tiến hóa Mega siêu ngầu của Charizard với ngọn lửa xanh bùng cháy dữ dội, toát lên bá khí mạnh mẽ khó cưỡng." },
    { id: "14", category: "pokemon", name: "Figure Pokemon Mew", price: "280.000", image: "assets/images/pokemon-mew.jpg", productLink: "html/product-detail.html", desc: "Pokemon huyền bí hệ Siêu Linh Mew mang dáng vẻ nhỏ nhắn, huyền ảo cùng khả năng học được mọi chiêu thức trong thế giới Pokemon." },
    { id: "15", category: "pokemon", name: "Figure Pokemon Arceus", price: "600.000", image: "assets/images/pokemon-asus.webp", productLink: "html/product-detail.html", desc: "Pokemon tối cao Arceus - Đấng sáng tạo tối thượng của vũ trụ Pokemon với tạo hình uy nghiêm thần thánh, cực kỳ giá trị." },

    { id: "21", category: "onepiece", name: "Figure Luffy Gear 5 Sun God Nika", price: "850.000", image: "assets/images/op-lufy.avif", productLink: "html/product-detail.html", desc: "Mô hình thuyền trưởng Monkey D. Luffy trong trạng thái thức tỉnh Trái Ác Quỷ Thần Mặt Trời Nika. Toàn thân bao phủ bởi làn khói trắng tinh và nụ cười ngạo nghễ, thể hiện sự tự do tối thượng đỉnh cao." },
    { id: "22", category: "onepiece", name: "Figure Roronoa Zoro Tam Kiếm", price: "720.000", image: "assets/images/op-zoro.webp", productLink: "html/product-detail.html", desc: "Kiếm sĩ phái Tam Kiếm Roronoa Zoro trong tư thế sẵn sàng tung tuyệt chiêu với sát khí ngút trời. Các đường vân trên thanh kiếm Enma được làm cực kỳ sắc nét, toát lên vẻ dũng mãnh của một bậc thầy kiếm thuật." },
    { id: "23", category: "onepiece", name: "Figure Nami Hoa Tiêu", price: "550.000", image: "assets/images/op-nami.webp", productLink: "html/product-detail.html", desc: "Nàng hoa tiêu xinh đẹp Nami của băng Mũ Rơm với chiếc gậy thời tiết Clima-Tact quen violent. Tạo hình năng động, quyến rũ kết hợp cùng hiệu ứng những đám mây sấm sét sinh động xung quanh." },
    { id: "24", category: "onepiece", name: "Figure Vinsmoke Sanji Chân Lửa", price: "680.000", image: "assets/images/op-sanji.webp", productLink: "html/product-detail.html", desc: "Anh chàng đầu bếp lịch lãm Sanji đang tung cú đá rực lửa Diable Jambe đầy uy lực. Hiệu ứng ngọn lửa bùng cháy bán trong suốt ở chân được đúc tinh xảo, tạo điểm nhấn cực mạnh cho góc trưng bày." },
    { id: "25", category: "onepiece", name: "Figure Tony Tony Chopper Đáng Yêu", price: "320.000", image: "assets/images/op-choper.webp", productLink: "html/product-detail.html", desc: "Bác sĩ nhỏ tuổi Chopper siêu cấp đáng yêu trong trang phục hậu Wano Quốc. Mô hình đi kèm chiếc ba lô nhỏ nhắn và biểu cảm hân hoan rạng rỡ, làm tan chảy trái tim của mọi fan hâm mộ." },
    { id: "26", category: "onepiece", name: "Figure Brook Linh Vương", price: "620.000", image: "assets/images/op-brook.webp", productLink: "html/product-detail.html", desc: "Nhạc công xương xẩu Brook - 'Linh Vương' lịch lãm với cây đàn guitar cá tính. Chi tiết bộ xương và bộ vest quý tộc được hoàn thiện xuất sắc, mang đậm chất rock phóng khoáng và ma mị." },
    { id: "27", category: "onepiece", name: "Figure Portgas D. Ace Hỏa Quyền", price: "750.000", image: "assets/images/op-ace.webp", productLink: "html/product-detail.html", desc: "Mô hình tưởng niệm Anh Trai Quốc Dân Portgas D. Ace với chiêu thức Hỏa Quyền thương hiệu. Ngọn lửa bao quanh cơ thể săn chắc cùng chiếc mũ cao bồi đặc trưng tạo nên một tư thế chiến đấu bất tử." },
    { id: "28", category: "onepiece", name: "Figure Tứ Hoàng Kaido Sinh Vật Mạnh Nhất", price: "1.850.000", image: "assets/images/op-kaido.webp", productLink: "html/product-detail.html", desc: "Mô hình vị Tứ Hoàng hung bạo Kaido Bách Thú với kích thước cực khủng. Cơ bắp cuồn cuộn, vết sẹo chữ X lớn trên ngực và cặp sừng rồng uy nghiêm được điêu khắc vô cùng hầm hố, đè bẹp mọi mô hình thông thường." },
    { id: "29", category: "onepiece", name: "Figure Anh Hùng Hải Quân Garp", price: "800.000", image: "assets/images/op-grap.webp", productLink: "html/product-detail.html", desc: "Phó Đô Đốc Huyền Thoại Monkey D. Garp với chiếc áo choàng Công Lý tung bay trong gió. Mô hình bắt trọn khoảnh khắc nắm đấm bọc Haki vũ trang huyền thoại chuẩn bị giáng xuống đầu kẻ thù." },
    { id: "30", category: "onepiece", name: "Figure God Usopp Thánh Gióng", price: "580.000", image: "assets/images/op-ussop.webp", productLink: "html/product-detail.html", desc: "Xạ thủ 'God' Usopp với chiếc súng cao su Kabuto khổng lồ và chiếc túi đựng đầy các loại hạt Pop Green. Tư thế lém lỉnh nhưng không kém phần ngầu lòi khi chuẩn bị thực hiện một cú bắn định đoạt trận đấu." }
];

function addProduct(id, name, price, image, hyperLink)
{
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col-md-3 col-sm-6");

    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden");

    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover h-100");

    productImage.appendChild(Image);

    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center text-truncate");
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);
  
    const productPrice = document.createElement("p");
    
    const productPriceText = document.createTextNode(price + "đ");
    productPrice.appendChild(productPriceText);

    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink + "?id="+id);
    productLink.setAttribute("class", "btn btn-outline-info btn-sm mt-auto");

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    document.getElementById("product-list").appendChild(productItem);
}

function filterProducts(category) {
    const listContainer = document.getElementById("product-list");
    listContainer.innerHTML = "";

    localStorage.setItem("selectedCategory", category);

    productList.forEach(function(item) {
        if (category === "all" || item.category === category) {
            addProduct(item.id, item.name, item.price, item.image, item.productLink);
        }
    });
}

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("mySimpleCart")) || [];
    const quickList = document.getElementById("quick-cart-list");
    const emptyMsg = document.getElementById("cart-empty-msg");
    
    const totalContainer = document.getElementById("cart-total-price");

    if (!quickList) return; 
    quickList.innerHTML = ""; 

    if (cart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = "block";
        if (totalContainer) totalContainer.innerText = "0đ";
        return;
    } else {
        if (emptyMsg) emptyMsg.style.display = "none";
    }

    let totalSum = 0;

    cart.forEach(function(name, index) {

        const originalProduct = productList.find(p => p.name === name);
        let currentPriceStr = "0";
        
        if (originalProduct) {
            currentPriceStr = originalProduct.price;
            const numericPrice = Number(currentPriceStr.replace(/\./g, ""));
            totalSum += numericPrice;
        }

        const item = document.createElement("div");
        item.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center py-2");
        
        item.innerHTML = `
            <div>
                <span class="text-dark fw-bold small">🔹 ${name}</span>
                <br>
                <small class="text-danger fw-bold ms-3" style="font-size: 11px;">Giá: ${currentPriceStr}đ</small>
            </div>
            <button class="btn btn-sm btn-outline-danger border-0 py-0 px-2" onclick="removeFromCart(${index})">
                <i class="fa-solid fa-trash-can"></i> Xóa
            </button>
        `;
        quickList.appendChild(item);
    });

    if (totalContainer) {
        totalContainer.innerText = totalSum.toLocaleString('vi-VN') + "đ";
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("mySimpleCart")) || [];
    cart.splice(index, 1); 
    localStorage.setItem("mySimpleCart", JSON.stringify(cart)); 
    renderCart(); 
}

document.addEventListener("DOMContentLoaded", function() {
    renderCart(); 

    const addToCartBtn = document.getElementById("btn-add-to-cart");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            const productName = document.querySelector("h2") ? document.querySelector("h2").innerText : "Sản phẩm";
            
            let cart = JSON.parse(localStorage.getItem("mySimpleCart")) || [];
            cart.push(productName);
            localStorage.setItem("mySimpleCart", JSON.stringify(cart));

            renderCart(); 
        });
    }
});

function checkout() {
    let cart = JSON.parse(localStorage.getItem("mySimpleCart")) || [];
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống, chọn thêm món đi bạn ơi!");
        return;
    }
    
    alert("Đơn hàng của bạn đã được ghi nhận! Cảm ơn bạn đã mua sắm tại Thế Giới Mô Hình.");
    
    // Xóa sạch giỏ hàng sau khi mua
    localStorage.removeItem("mySimpleCart");
    
    // Cập nhật lại giao diện và đóng Modal
    renderCart();
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();
}