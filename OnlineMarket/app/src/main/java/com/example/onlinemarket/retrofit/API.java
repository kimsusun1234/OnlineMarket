package com.example.onlinemarket.retrofit;

import com.example.onlinemarket.model.ProductModel;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface API {

    //Retrofit sử dụng Annotation(chú thích) để khai báo phương thức được sử dụng
    //Dưới đây nghĩa là hàm này sẽ được gọi khi app android gửi request với phương thức get lên server
    //Lúc này, address request đến server sẽ là localhost:2020/getProductAPI
    //Router bên NodeJS sẽ nhận biết phương thức GET với address là getProductAPI
    @GET("/getProductAPI")
    //getProduct sẽ là hàm callback, trả về một ArrayList chứa danh sách các products
    Call<ArrayList<ProductModel>> getProduct();

    //Class Call là để retrofit request lên server và lấy response trả về

}
