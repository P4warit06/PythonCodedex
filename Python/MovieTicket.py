def show_movies(movie_list):
    for i in range(len(movie_list)):
        movie = movie_list[i]
        print(f"{i + 1}. {movie['movie_name']} - ราคา: {movie['ticket_price']} บาท - ประเภท: {movie['genre']} - อายุที่เหมาะสม: {movie['age_restriction']}")
    print("-----------------------------------")
       
# # ฟังก์ชันตรวจสอบอายุตามข้อจำกัดของหนัง
def check_age(user_age, age_restriction):
# #     # TODO: ถ้า age_restriction เป็น 'G' ให้ผ่านเลย
# #     # ถ้าไม่ใช่ ให้ดึงเลขอายุขั้นต่ำมาเปรียบเทียบกับ user_age

# # ฟังก์ชันสำหรับการซื้อบัตรชมหนัง
def buy_ticket(movie_list):
    show_movies(movie_list)
    choose_ticker =  int(input("เลือกหนังที่ต้องการชม (1-5): "))
    ageUser = int(input("กรุณากรอกอายุของคุณ: "))
    check_age(ageUser , )
#     # TODO:
#     # 1. เรียก show_movies เพื่อแสดงรายชื่อหนัง
#     # 2. รับค่าตัวเลือกหนังจากผู้ใช้ (1-5)
#     # 3. รับอายุผู้ใช้
#     # 4. ตรวจสอบอายุผ่าน check_age
#     #    - ถ้าไม่ผ่าน ให้แสดงข้อความว่าอายุน้อยเกินไปและ return ออกจากฟังก์ชัน
#     # 5. ให้ผู้ใช้เลือกเสียงพากย์ (1 = พากย์ไทย, 2 = Soundtrack)
#     # 6. คำนวณราคาตั๋วโดยใช้ calculate_price
#     # 7. แสดงผลการซื้อบัตร พร้อมชื่อหนัง, เสียงที่เลือก, ราคาตั๋ว 
 
 
# # ฟังก์ชันคำนวณราคาตั๋วโดยขึ้นกับประเภทหนัง
def calculate_price(base_price, genre):
    if genre == 'Sci-Fi':
        return base_price + 50
    else:
        return base_price   

def main():
    movies = [
        {'movie_name': 'Avengers Endgame', 'ticket_price': 300, 'genre': 'Action', 'age_restriction': '13'},
        {'movie_name': 'Inception', 'ticket_price': 280, 'genre': 'Sci-Fi', 'age_restriction': '13'},
        {'movie_name': 'It', 'ticket_price': 180, 'genre': 'Horror', 'age_restriction': '18'},
        {'movie_name': 'The Notebook', 'ticket_price': 250, 'genre': 'Romantic', 'age_restriction': '13'},
        {'movie_name': 'Harry Potter and the Sorcerer\'s Stone', 'ticket_price': 260, 'genre': 'Fantasy', 'age_restriction': 'G'}
    ]
    while True:
        print("1.แสดงหนังทั้งหมด, 2.ซื้อตั๋วหนัง")
        menu = int(input("เลือกเมนู: "))
        if menu == 1:
            print("รายชื่อหนังทั้งหมดในระบบ:")
            show_movies(movies)
        elif menu == 2 :
            buy_ticket(movies)
        else :
            print("Invalid choice")
            break 
main()