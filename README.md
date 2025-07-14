
Bu proje, **React**, **TypeScript**, **Redux**, **Redux Persist**, **React Router DOM** ve **Material UI** kullanılarak geliştirilmiş bir frontend ile; **Spring Boot** ve **MySQL** destekli bir backend'den oluşan tam işlevli bir **Todo Uygulamasıdır**.

---

## 🚀 Özellikler

### ✅ Frontend (React)

- [x] Yeni todo ekleme  
- [x] Todo silme  
- [x] Tüm todoları silme  
- [x] Todoları tarihe göre azalan şekilde listeleme  
- [x] Karanlık/Açık tema seçeneği  
- [x] Snackbar bildirimleri  
- [x] Yerel depolama (localStorage) üzerinden todo listesi ve tema verilerini saklama (redux-persist)

### ⚙️ Backend (Spring Boot)

- [x] RESTful API yapısı  
- [x] MySQL veritabanı bağlantısı  
- [x] Todo ekleme, silme, tümünü silme, ve listeleme uç noktaları  
- [x] CORS yapılandırması (`localhost:5173` için)

---

## 🛠️ Kurulum

### 🔧 Backend Kurulumu (Spring Boot)

1. **MySQL** veritabanı oluştur:

```sql
CREATE DATABASE todoapp;
application.properties dosyasını yapılandır:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/todoapp
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

Uygulamayı başlat:
./mvnw spring-boot:run

🎨 Frontend Kurulumu (React + TypeScript)

cd frontend
npm install
npm run dev
Frontend varsayılan olarak http://localhost:5173 adresinde çalışır.

🔌 API Uç Noktaları
HTTP	Endpoint	Açıklama
GET	/api/todo/get-all-by-date-desc	Todoları getir (DESC)
POST	/api/todo	Yeni todo oluştur
DELETE	/api/todo/{todoId}	Belirli bir todo sil
DELETE	/api/todo/delete-all	Tüm todoları sil

📦 Kullanılan Kütüphaneler
Frontend:
react, react-router-dom

@reduxjs/toolkit, react-redux, redux-persist

typescript

@mui/material, @mui/icons-material

Backend:
spring-boot-starter-web

spring-boot-starter-data-jpa

mysql-connector-j

spring-boot-devtools
