package com.example.onlinemarket.adapter;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.onlinemarket.R;
import com.example.onlinemarket.model.ProductModel;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;

public class ProductRecyclerViewAdapter  extends RecyclerView.Adapter<ProductRecyclerViewAdapter.ViewHolder> {

    private ArrayList<ProductModel> dataList;
    private Context context;

    public ProductRecyclerViewAdapter(ArrayList<ProductModel> dataList, Context context) {
        this.dataList = dataList;
        this.context = context;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        //DInh nghia layout
        return new ViewHolder(LayoutInflater.from(context).inflate(R.layout.card_view_product, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, final int position) {

        holder.tvName.setText(dataList.get(position).getName());
        holder.tvPrice.setText(""+dataList.get(position).getPrice());
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(context, ""+position, Toast.LENGTH_SHORT).show();
            }
        });

        //load ảnh vào imageview
        //thuoc tinh image co gia tri la "./uploads/abc.xyz"
        //nen ta dung substring de cat dau "."di, sau do cong voi hostname de ra url hoan chinh
        Log.d("image URL: ", "192.168.50.103:2020" + dataList.get(position).getImage().substring(1));
        Picasso.get().load("192.168.50.103:2020/getImage/image=" + dataList.get(position).getImage().substring(1)).into(holder.iv);
    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        private ImageView iv;
        private TextView tvName;
        private TextView tvPrice;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            iv = itemView.findViewById(R.id.ivProductRecyclerView);
            tvName = itemView.findViewById(R.id.tvNameRecyclerView);
            tvPrice = itemView.findViewById(R.id.tvPriceRecyclerView);
        }

    }
}
