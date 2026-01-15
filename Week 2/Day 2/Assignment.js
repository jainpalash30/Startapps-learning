
        var products = [
            {id: 1, name: "Laptop", category: "Electronics", price: 45000},
            {id: 2, name: "Smartphone", category: "Electronics", price: 25000},
            {id: 3, name: "Headphones", category: "Electronics", price: 2000},
            {id: 4, name: "T-Shirt", category: "Clothing", price: 500},
            {id: 5, name: "Jeans", category: "Clothing", price: 1500},
            
        ];
        
        var cats = [];
        for (var i = 0; i < products.length; i++) {
            if (cats.indexOf(products[i].category) === -1) {
                cats.push(products[i].category);
            }
        }
        var sel = document.getElementById('categoryFilter');
        for (var j = 0; j < cats.length; j++) {
            var opt = document.createElement('option');
            opt.value = cats[j];
            opt.textContent = cats[j];
            sel.appendChild(opt);
        }
        
        function showProducts(prods) {
            var box = document.getElementById('productContainer');
            box.innerHTML = '';
             
            
            if (prods.length == '0') {
                box.innerHTML = '<div class="no-products">No products found</div>';
                return;
            }
            
            for (var i = 0; i < prods.length; i++) {
                var p = prods[i];
                var card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = '<div><div class="product-name">' + p.name + '</div><div class="product-category">' + p.category + '</div><div class="product-price">₹' + p.price + '</div></div>';
                box.appendChild(card);
            }
        }
        
        function applyFilters() {
            var search = document.getElementById('searchInput').value.toLowerCase();
            var cat = document.getElementById('categoryFilter').value;
            var min = document.getElementById('minPrice').value;
            var max = document.getElementById('maxPrice').value;
            var sort = document.getElementById('sortPrice').value;
            
            var result = [];
            
            for (var i = 0; i < products.length; i++) {
                var p = products[i];
                var ok = true;
                
                if (search !== '') {
                    if (p.name.toLowerCase().indexOf(search) === -1) {
                        ok = false;
                    }
                }
                
                if (cat !== 'all') {
                    if (p.category !== cat) {
                        ok = false;
                    }
                }
                
                if (min !== '') {
                    if (p.price < parseFloat(min)) {
                        ok = false;
                    }
                }
                
                if (max !== '') {
                    if (p.price > parseFloat(max)) {
                        ok = false;
                    }
                }
                
                if (ok) {
                    result.push(p);
                }
            }
            
            if (sort === 'low') {
                for (var i = 0; i < result.length; i++) {
                    for (var j = i + 1; j < result.length; j++) {
                        if (result[i].price > result[j].price) {
                            var temp = result[i];
                            result[i] = result[j];
                            result[j] = temp;
                        }
                    }
                }
            } else if (sort === 'high') {
                for (var i = 0; i < result.length; i++) {
                    for (var j = i + 1; j < result.length; j++) {
                        if (result[i].price < result[j].price) {
                            var temp = result[i];
                            result[i] = result[j];
                            result[j] = temp;
                        }
                    }
                }
            }
            
            showProducts(result);
        }
        
        function toggleView(v) {
            var box = document.getElementById('productContainer');
            var btns = document.querySelectorAll('.view-btn');
            
            if (v === 'list') {
                box.className = 'list-view';
                btns[1].classList.add('active');
                btns[0].classList.remove('active');
            } else {
                box.className = '';
                btns[0].classList.add('active');
                btns[1].classList.remove('active');
            }
        }
        
        document.getElementById('searchInput').addEventListener('input', applyFilters);
        document.getElementById('categoryFilter').addEventListener('change', applyFilters);
        document.getElementById('minPrice').addEventListener('input', applyFilters);
        document.getElementById('maxPrice').addEventListener('input', applyFilters);
        document.getElementById('sortPrice').addEventListener('change', applyFilters);
        
        showProducts(products);