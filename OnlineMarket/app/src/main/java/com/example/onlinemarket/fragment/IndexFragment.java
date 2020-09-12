package com.example.onlinemarket.fragment;

import android.content.Context;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.onlinemarket.R;
import com.example.onlinemarket.adapter.ProductRecyclerViewAdapter;
import com.example.onlinemarket.model.ProductModel;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.ArrayList;

import static com.example.onlinemarket.StaticVariable.productList;

public class IndexFragment extends Fragment {

    private Context context;

    private RecyclerView rv;
    private FloatingActionButton fab;

    private ProductRecyclerViewAdapter adapter;

    public IndexFragment(Context context) {
        this.context = context;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_index, container, false);

        //mapping
        rv = view.findViewById(R.id.rvMain);
        fab = view.findViewById(R.id.fab);

        //adapter
        setAdapter();


        return view;
    }

    private void setAdapter(){

//        ArrayList<ProductModel> demoData = new ArrayList<>();
//
//        for (int i = 0; i < 10; i++)
//        {
//            demoData.add(new ProductModel("Name " + i, " aaaa ", " Des: " + i, 5000, 50, "Publisher " + i, "image", true));
//        }

        //tham số thứ 2 của constructor là số cột????
        GridLayoutManager gridLayoutManager = new GridLayoutManager(context, 3);
        adapter = new ProductRecyclerViewAdapter(productList, context);
        rv.setLayoutManager(gridLayoutManager);
        rv.setAdapter(adapter);
    }
}