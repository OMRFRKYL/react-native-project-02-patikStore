Proje Adı: react-native-project-02-patikaStore

*-*-* Projenin Amacı: *-*-*

-Projemiz kapsamında statik olan ürünlerimizi mobil ekran üzerine yansıtmak.
-Eğitimin seviyesine göre başlangıç aşamasında olan bu proje kapsamında sadece ürünler sabit değerlerle gösterilmektedir.
-Oluşturulan "searcBar"'ın fonksiyonelliği bulunmamaktadır.

*-*-* Yapılan İşlemler *-*-*

* İlk olarak projemizi "npx react-native init patikaStore" komutu ile oluşturduk ve  "npm start" komutuyla projemizi başlattık.
* Emülatörümüzü aktif etmek için ayrı bir terminalde "npm run android" komutumuzu kullandık.
* data.json dosyamızın içerisine sergileyeceğimiz ürünleri oluşturduk.
* Component mimarisi sayesinde Product.js ve Product.style.js dosyalarımızı oluşturduk.
* App.js üzerinden datamızı import ettik ve daha sonra oluşturduğumuz "product.js" dosyamıza "props" aracılığıyla verilerimizi aktardık.
* Karşılanan veri product.js dosyamızda farklı başlıklar altında sergilendi.
* Stillendirme işlemlerimizi harici olarak "product.style.js" dosyamızda yaparak export ettik ve gerekli yerde import ederek kullandık.
* SearchBar oluşturmak için harici bir dosya kullandık ve app.jsde import ederek kullandık.


*-*-* Akılda Kalması Gerekenler *-*-*

* FlatList öğeleri kaydırılabilir bir liste görünümünde oluşturmak için kullanılır.
-renderItem() ve data() zorunlu iki propertysidir.
-Projedede kullandığımız üzere numColumns=() sayesinde birden fazla sütün kullanabiliriz.
-ListHeaderComponent propertysi sayesinde flatlist() in en üstüne kullanmak istediğimiz componenti yada başlığı tercih edebiliriz.
-keyExtractor() sayesinde unıque(benzersiz) bir key(id) oluşturmamızı sağlar.

* SearchBar oluşumunda TextInput() hazır componentini kullandık.
-placeholder() özelliği sayesinde searchbar üzerinde görünmesini istediğimiz text  yazarız.


Projemizin görselleri aşağıda mevcuttur.İYİ SEYİRLER ... :):):)



https://user-images.githubusercontent.com/93818418/201691620-ae64c973-3585-4cf3-adfd-43c3c03b8c70.mp4

![Patikastore1](https://user-images.githubusercontent.com/93818418/201692034-df6fc964-281d-4da7-9814-213f588a1672.png)
![patikaStore2](https://user-images.githubusercontent.com/93818418/201692060-f755c0a0-b07d-4ff8-995d-1f898eadae5e.png)

