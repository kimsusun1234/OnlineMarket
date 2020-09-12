package com.example.onlinemarket.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.example.onlinemarket.R;
import com.example.onlinemarket.fragment.IndexFragment;
import com.example.onlinemarket.model.ProductModel;
import com.example.onlinemarket.retrofit.API;
import com.example.onlinemarket.retrofit.RetrofitClient;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static com.example.onlinemarket.StaticVariable.productList;

public class HomeActivity extends AppCompatActivity {

    private RetrofitClient retrofitClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        getData();


    }

    //set fragment
    private void setFragment()
    {
        FragmentManager fragmentManager = getSupportFragmentManager();
        IndexFragment indexFragment = new IndexFragment(HomeActivity.this);
        fragmentManager.beginTransaction().replace(R.id.frmHome, indexFragment).commit();
    }


    //getData from db
    private void getData(){

        retrofitClient = new RetrofitClient();

        //dùng đối tượng retrofitclient để truy cập đến địa chỉ URL, lấy API về và tạo ra một đối tượng mang kiểu API
        API api = retrofitClient.getClient().create(API.class);
        //gọi hàm abstract getProduct trong api
        //enqueue hinh nhu la de xu li bat dong bo
        api.getProduct().enqueue(new Callback<ArrayList<ProductModel>>() {
            @Override
            public void onResponse(Call<ArrayList<ProductModel>> call, Response<ArrayList<ProductModel>> response) {

                ArrayList<ProductModel> list = response.body();

                for (int i = 0; i < list.size(); i++)
                {
                    ProductModel productModel = list.get(i);
                    Log.d("Product", productModel.getName());
                }

                productList = list;

                setFragment();

            }

            @Override
            public void onFailure(Call<ArrayList<ProductModel>> call, Throwable t) {

                //Loi thi log va toast thong tin ra
                Toast.makeText(HomeActivity.this, ""+t.getMessage(), Toast.LENGTH_SHORT).show();
                Log.e("RetrofitError", ""+t.getMessage());

            }
        });

    }
}