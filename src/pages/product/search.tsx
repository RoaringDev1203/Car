import React from "react";
import styled from "styled-components";
import { StyledButton, StyledIconButton } from "@/components/buttons";
import Icon from "@/components/icons";
import ProductCard from "@/components/product-card";
import { Dropdown } from "@/components/dropdown";
import { StyledTag, StyledTopBackground } from "@/components/others";
import PanelLayout from "@/layout/panel-layout";

const products = [
    {img: {cover: "/img/product-1.jpg", second: "/img/product-7.jpg"}, price: {currenct: 482, old: 0}, name: "Falken", score: 4, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
	{img: {cover: "/img/product-2.jpg", second: "/img/product-8.jpg"}, price: {currenct: 110, old: 242}, name: "Falken", score: 5, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
	{img: {cover: "/img/product-3.jpg", second: "/img/product-9.jpg"}, price: {currenct: 1750, old: 0}, name: "Falken", score: 4, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
	{img: {cover: "/img/product-4.jpg", second: "/img/product-1.jpg"}, price: {currenct: 122, old: 123.20}, name: "Falken", score: 4, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
	{img: {cover: "/img/product-5.jpg", second: "/img/product-1.jpg"}, price: {currenct: 98, old: 242}, name: "Falken", score: 5, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
]

const sortBy = [
    'Highest score',
    'Trending',
    'Date modified',
    'Date created'
];

const showCount = ["9", "25", "50", "75", "100"];
const tags = ["Drywall Anchors", "Gardening Tools", "Roof Rack", "Brands", "Category"];

const ProductSearch = () => {

    const [status, setStatus] = React.useState({
        selectedType: 'list' as 'list'|'grid'
    })

    return (
        <div>
            <PanelLayout title="Dunlop">
                <div className="mt-2">
                    <img src="./img/cat_banner.jpg" alt="cat_banner" style={{width: '100%', height: 'auto'}} />
                    <div className="gray-text small mt">Shop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.</div>
                    <div className="mt-1 h6">Refine Search</div>
                    <div className="d middle gap wrap mt">
                        {tags.map((i, k) => (
                            <StyledTag key={k}>{i}</StyledTag>
                        ))}
                    </div>
                    <div className="d middle between gap mt-2">
                        <div className="d middle between gap-sm wrap" style={{flex: 1}}>
                            <div>Product Compare (0)</div>
                            <div className="d middle col-gap row-gap-sm wrap">
                                <div className="d middle gap-sm">
                                    <div>Sort By:</div>
                                    <Dropdown onChange={() => { }} values={[...sortBy.map(i => ({ key: i, value: i }))]} minWidth={150} />
                                </div>
                                <div className="d middle gap-sm">
                                    <div>Show:</div>
                                    <Dropdown onChange={() => { }} values={[...showCount.map(i => ({ key: i, value: i }))]} minWidth={100} />
                                </div>
                            </div>
                        </div>
                        <div className="d middle gap-sm">
                            <StyledIconButton className={`tertiary ${status.selectedType === 'list' ? 'active' : ''}`} onClick={() => setStatus({...status, selectedType: 'list'})}>
                                <Icon icon="List" size={20} />
                            </StyledIconButton>
                            <StyledIconButton className={`tertiary ${status.selectedType === 'grid' ? 'active' : ''}`} onClick={() => setStatus({...status, selectedType: 'grid'})}>
                                <Icon icon="Grid" size={20} />
                            </StyledIconButton>
                        </div>
                    </div>
                    <div className="row mt-1">
                        {products.map((i, k) => (
                            <div key={k} className={`${status.selectedType === 'list' ? 'col-12' : 'col-md-4 col-sm-6 col-12'} mt-1`}>
                                <ProductCard data={i} type={status.selectedType} show="detail" />
                            </div>
                        ))}
                    </div>
                </div>
            </PanelLayout>
        </div>
    )
}

export default ProductSearch;