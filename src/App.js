import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReviewItem from './Reviews';
import PropTypes from 'prop-types';

function App() {
    return (
        <div className="Parentbox">
            <ProdukFoto />
            <ProdukInfo isDiskon="yes" category="LEBARAN" name="Jaket UYE" />

            <div className="Review-box">
                <h2>Reviews</h2>
                <div className="Item">
                    <img src="" alt="" />
                    <ReviewItem />
                </div>
            </div>
        </div>
    );
}



function CekDiskon(props) {
    const { isDiskon, discount } = props;
    if (isDiskon === "no") {
        return (
            <p>Tidak ada diskon</p>
        );
    } else if (isDiskon === "coming") {
        return (
            <p>Akan ada Diskon</p>
        );
    } else {
        return (
            <p>Diskon {discount}% off </p>
        );
    }
}

function ProdukFoto() {
    return (
        <div className="Foto">
            <img src="foto.jpeg" alt="" />
        </div>
    );
}

function ProdukInfo(props) {
    const { category, name, isDiskon } = props;
    const benefit = ["Tidak kusut terkena air", "Bahan Dingin", "Tidak mudah luntur"];
    const listBenefits = benefit.map((itemBenefit) =>
        <li key={itemBenefit}>{itemBenefit}</li>
    );
    return (
        <div className="Deskripsi">
            <h1 className="Cate">{category}</h1>
            <p className="Title">{name}</p>
            <p className="Price">IDR. 90.000,00</p>
            <CekDiskon discount={50} isDiskon={isDiskon} />
            <p className="Info">
                jaket design edisi koding, terdiri dari framework dan tools yang sering digunakan ngoding sehingga terlihat keren
            </p>
            <ul>
                {listBenefits}
            </ul>
            <a onClick={(e) => TambahCart(name, e)} href="k">Add to Cart</a>
        </div>
    );
}

function TambahCart(e) {
    return alert('Membeli Produk ' + e);
}

CekDiskon.propTypes = {
    discount: PropTypes.number.isRequired
};

export default App;