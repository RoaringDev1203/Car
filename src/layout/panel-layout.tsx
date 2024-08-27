import { StyledCard, StyledTopBackground } from '@/components/others';
import ProductCard from '@/components/product-card';
import React from 'react';

interface PanelLayoutProps {
	title: string
    isRightPanel?: boolean
	children?: React.ReactNode | React.ReactNode[]
}

const products = [
    {img: {cover: "/img/product-1.jpg", second: "/img/product-7.jpg"}, price: {currenct: 482, old: 0}, name: "Falken", score: 4, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
	{img: {cover: "/img/product-2.jpg", second: "/img/product-8.jpg"}, price: {currenct: 110, old: 242}, name: "Falken", score: 5, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
	{img: {cover: "/img/product-3.jpg", second: "/img/product-9.jpg"}, price: {currenct: 1750, old: 0}, name: "Falken", score: 4, content: "Unprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel's latest, most powerful innovation yet: Intel® Centrino® 2 pr.."},
];

const PanelLayout = ({title, isRightPanel, children}: PanelLayoutProps) => {

	return (
		<div>
			<StyledTopBackground>
                <div className="h4">{title}</div>
                <div></div>
            </StyledTopBackground>
            <section className="container mt-1 mb-4">
                <div className="row">
                    <div className={`col-lg-3 mt-2 ${!isRightPanel ? 'lg-order-2' : 'order-2'}`}>
                        <div style={{border: '1px solid var(--border)'}}>
                            <div style={{padding: '15px 20px'}} className="h6">CATEGORIES</div>
                            <div className="hr"></div>
                            <div style={{padding: '15px 20px'}}>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="mt-2 lg-hidden" style={{border: '1px solid var(--border)'}}>
                            <div style={{padding: '15px 20px'}} className="h6">BESTSELLERS</div>
                            <div className="hr"></div>
                            <div style={{padding: '15px 20px'}}>
                                {products.map((i, k) => (
                                    <div key={k} className="mt">
                                        <ProductCard data={i} type="list" show="simple" title='text' shopBag='icon' heart='icon' icon='icon'/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-2 lg-hidden">
                            <img src="/img/leftbanner.jpg" alt="leftbanner" style={{width: '100%', height: 'auto'}} />
                        </div>
                    </div>
                    <div className={`col-lg-9 ${!isRightPanel ? 'lg-order-1' : 'order-1'}`}>
                        {children}
                    </div>
                </div>
            </section>
		</div>
	)
}

export default PanelLayout;