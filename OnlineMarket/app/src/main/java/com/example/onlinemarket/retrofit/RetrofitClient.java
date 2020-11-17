package com.example.onlinemarket.retrofit;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitClient {

    //khai bao dia chi cua server
    public static final String URL = "http://192.168.50.103:2020/";
    public static Retrofit retrofit;

    //hàm này để trả về một đối tượng Retrofit đã được cấu hình và kết nối với database
    public static Retrofit getClient(){

        //cau hinh retrofit voi URL cua server
        if (retrofit == null)
        {
            //Đổi tượng retrofit này sẽ truy xuất đến URL, sử dụng library GsonConverterFactory để convert data dạng JSON được response về từ server
            retrofit = new Retrofit.Builder().baseUrl(URL).addConverterFactory(GsonConverterFactory.create()).build();
        }

        return retrofit;

    }

}
