let CaruoselPosition=1;
const NavButtonsIds=["Carousel_Nav_Button_1_Home_svg","Carousel_Nav_Button_2_Home_svg","Carousel_Nav_Button_3_Home_svg","Carousel_Nav_Button_4_Home_svg","Carousel_Nav_Button_5_Home_svg"];
function NavCaruoselClickedUpdate(){
    for (let i = 0; i < NavButtonsIds.length; i++) {
        document.getElementById(NavButtonsIds[i]).classList.remove("Carousel_Nav_Button_Clicked");
    }
    document.getElementById(NavButtonsIds[CaruoselPosition-1]).classList.add("Carousel_Nav_Button_Clicked");
}
function CaruoselRemoveClasses_Sub_div(id,classAdded){
        document.getElementById(id).classList.remove("Home_Carousel_image1");
        document.getElementById(id).classList.remove("Home_Carousel_image2");
        document.getElementById(id).classList.remove("Home_Carousel_image3");
        document.getElementById(id).classList.remove("Home_Carousel_image4");
        document.getElementById(id).classList.remove("Home_Carousel_image5");
        document.getElementById(id).classList.add(classAdded);
}
function CaruoselRemoveClasses(class1,class2,class3){
    NavCaruoselClickedUpdate();
    CaruoselRemoveClasses_Sub_div("Home_Carousel_left_image",class1);
    CaruoselRemoveClasses_Sub_div("Home_Carousel_Center_image",class2);
    CaruoselRemoveClasses_Sub_div("Home_Carousel_Right_image",class3);
}
function NavCaruoselClicked(Index){
    CaruoselPosition=Index;
    CarouselImageChange();
}
function LastCaruoselIndex(){
    CaruoselPosition--;
    CarouselImageChange();
}
function NextCaruoselIndex(){
    CaruoselPosition++;
    CarouselImageChange();
}
function CarouselImageChange(){
    switch(CaruoselPosition) {
        case 0:
            CaruoselPosition=5;
            CarouselImageChange();
            break;
        case 1:
            CaruoselRemoveClasses("Home_Carousel_image1","Home_Carousel_image2","Home_Carousel_image3");
            break;
        case 2:
            CaruoselRemoveClasses("Home_Carousel_image2","Home_Carousel_image3","Home_Carousel_image4");
            break;
        case 3:
            CaruoselRemoveClasses("Home_Carousel_image3","Home_Carousel_image4","Home_Carousel_image5");
            break;
        case 4:
            CaruoselRemoveClasses("Home_Carousel_image4","Home_Carousel_image5","Home_Carousel_image1");
            break;
        case 5:
            CaruoselRemoveClasses("Home_Carousel_image5","Home_Carousel_image1","Home_Carousel_image2");
            break;
        case 6:
            CaruoselPosition=1;
            CarouselImageChange();
            break;
      }
}
setInterval(function(){
    CaruoselPosition++;
    CarouselImageChange();
}, 10000);
function PageChange_remove_classes(){
    document.getElementById("Main_Body_Home").classList.add("Hiden");
    document.getElementById("Shop_Main_Page").classList.add("Hiden");
    document.getElementById("Custome_Design_Page").classList.add("Hiden");
    document.getElementById("Contact_page").classList.add("Hiden");
    document.getElementById("About_us_Page").classList.add("Hiden");
}
function PageChange(PageNumber){
    togle_hamburger_menu();
    switch (PageNumber) {
        case 0:
            PageChange_remove_classes();
            document.getElementById("Main_Body_Home").classList.remove("Hiden");
            document.getElementById("TopText_Header").children.textContent("Welcome");
            break;
        case 1:     
            PageChange_remove_classes();
            document.getElementById("Shop_Main_Page").classList.remove("Hiden");
            document.getElementById("TopText_Header").children.textContent("Shop");
            break;
        case 2:
            PageChange_remove_classes();
            document.getElementById("Custome_Design_Page").classList.remove("Hiden");
            document.getElementById("TopText_Header").children.textContent("Custome Desings");
            break;
        case 3:
            PageChange_remove_classes();
            document.getElementById("Contact_page").classList.remove("Hiden");
            document.getElementById("TopText_Header").children.textContent("Suport");
            break;
        case 4:
            PageChange_remove_classes();
            document.getElementById("About_us_Page").classList.remove("Hiden");
            document.getElementById("TopText_Header").children.textContent("About Us");
            break;
    }
}
let togle_hamburger_menu_showing=false;
function togle_hamburger_menu(){
    if (togle_hamburger_menu_showing){
        document.getElementById("Hamburger_Menu_tabs").classList.add("Hiden");
        togle_hamburger_menu_showing=false;
    }else if(!togle_hamburger_menu_showing){
        document.getElementById("Hamburger_Menu_tabs").classList.remove("Hiden");
        togle_hamburger_menu_showing=true;
    }
}