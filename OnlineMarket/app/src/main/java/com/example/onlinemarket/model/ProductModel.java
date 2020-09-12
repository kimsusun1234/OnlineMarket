package com.example.onlinemarket.model;

import com.google.gson.annotations.SerializedName;

public class ProductModel {

    //dùng các annotation giúp mapping theo các field của document trên db
    //Hoặc chỉ cần đặt tên thuộc tính của model trùng với field của document cũng đc
    @SerializedName("_id")
    private String id;
    @SerializedName("name")
    private String name;
    @SerializedName("category")
    private String category;
    @SerializedName("des")
    private String des;
    @SerializedName("price")
    private int price;
    @SerializedName("amount")
    private int amount;
    @SerializedName("publisher")
    private String publisher;
    @SerializedName("image")
    private String image;
    @SerializedName("status")
    private boolean status;

    public ProductModel(String name, String category, String des, int price, int amount, String publisher, String image, boolean status) {
        this.name = name;
        this.category = category;
        this.des = des;
        this.price = price;
        this.amount = amount;
        this.publisher = publisher;
        this.image = image;
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
