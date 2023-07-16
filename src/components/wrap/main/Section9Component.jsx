import React,{useEffect, useState} from 'react';
import Section9SlideWrapSlide from './Section9SlideWrapSlide';
import axios from 'axios';
import $ from 'jquery';

export default function Section9Component() {

    const [state, setState] = useState({
        상품: [],
        n: 0,
        param: '스승의날'
    });

    const [para, setPara] = useState('스승의날');

    const onClickTabBtn=(e, value)=>{
        e.preventDefault();
        axiosApi(value);
        setPara(value);
    }


   const axiosApi=(value)=>{      
        let item = '';

        if(value===undefined){
            item = state.param;
        }
        else{
            item = value;
        }

        
        axios({
            url:'./data/sec9_slide.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){  
                
                    if( item==="스승의날" ){
                        setState({
                            ...state,
                            상품: res.data.스승의날,
                            n: res.data.스승의날.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.스승의날.length}%` })
                    }
                    else if( item==="성년의날" ){
                        setState({
                            ...state,
                            상품: res.data.성년의날,
                            n: res.data.성년의날.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.성년의날.length}%` })
                    }                    
                    else if( item==="~2만원대" ){
                        setState({
                            ...state,
                            상품: res.data.$2만원대,
                            n: res.data.$2만원대.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.$2만원대.length}%` })
                    }
                    else if( item==="3~5만원대" ){
                        setState({
                            ...state,
                            상품: res.data.$3_5만원대,
                            n: res.data.$3_5만원대.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.$3_5만원대.length}%` })
                    }
                    
                    else if( item==="뷰티" ){
                        setState({
                            ...state,
                            상품: res.data.뷰티,
                            n: res.data.뷰티.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.뷰티.length}%` })
                    }
                    
                    else if( item==="건강" ){
                        setState({
                            ...state,
                            상품: res.data.건강,
                            n: res.data.건강.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.건강.length}%` })
                    }
                    
                    else if( item==="발사믹/오일" ){
                        setState({
                            ...state,
                            상품: res.data.발사믹_오일,
                            n: res.data.발사믹_오일.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.발사믹_오일.length}%` })
                    }
                    
                    else if( item==="와인/위스키/전통주" ){
                        setState({
                            ...state,
                            상품: res.data.와인_위스키_전통주,
                            n: res.data.와인_위스키_전통주.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.와인_위스키_전통주.length}%` })
                    }
                    
                    else if( item==="꽃" ){
                        setState({
                            ...state,
                            상품: res.data.꽃,
                            n: res.data.꽃.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.꽃.length}%` })
                    }
                    
                    else if( item==="신선" ){
                        setState({
                            ...state,
                            상품: res.data.신선,
                            n: res.data.신선.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.신선.length}%` })
                    }
                    
                    else if( item==="리빙/주방" ){
                        setState({
                            ...state,
                            상품: res.data.리빙_주방,
                            n: res.data.리빙_주방.length
                        })
                        $('#section9 .slide-wrap').css({width: `${25 * res.data.리빙_주방.length}%` })
                    }
                
        
               
            }
        })
        .catch((err)=>{
            console.log('AXIOS 실패!' + err );
        });
   } 

   useEffect(()=>{
       
        axiosApi();

    },[]);


    // 슬라이드 클릭 이벤트
    useEffect(()=>{
        let cnt=0;

        //1. 메인슬라이드함수
        mainSlide(); // 처음에 실행
        function mainSlide(){

            $('#section9 .slide-wrap').stop().animate({left: `${-100*cnt}%` },600);
            if(cnt===(Math.ceil(state.n / 4) - 1)){
                $('#section9 .arrow-next-btn').stop().fadeOut(300);
            }
            else{
                $('#section9 .arrow-next-btn').stop().fadeIn(300);
            }
            if(cnt===0){
                $('#section9 .arrow-prev-btn').stop().fadeOut(300);
            }
            else{
                $('#section9 .arrow-prev-btn').stop().fadeIn(300);
            }
        }
        
        //2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            //if(cnt>Math.ceil(state.n / 4) - 1) cnt=4;
            mainSlide();
        }
        //2-2. 이전카운트함수
        function prevCount(){
            cnt--;
            //if(cnt<1) cnt=0;
            mainSlide();
        }

        //3. 다음버튼클릭이벤트
        $('#section9 .arrow-next-btn').on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        });
        //3-2. 이전버튼클릭이벤트
        $('#section9 .arrow-prev-btn').on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        });


    },[state.n]);



    return (
        <section id='section9'>
            <div className="container">
                <div className="title">
                    <h2><a href="!#">🎁마음 전하는 선물 BEST</a></h2>
                </div>    
                <div className="content">
                    <nav className='sec9-tab-menu'>
                        <ul>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"스승의날")} className={para === "스승의날" ? 'on':''}>스승의 날</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"성년의날")} className={para === "성년의날" ? 'on':''}>성년의 날</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"~2만원대")} className={para === "~2만원대" ? 'on':''}>~2만원대</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"3~5만원대")} className={para === "3~5만원대" ? 'on':''}>3~5만원대</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"뷰티")} className={para === "뷰티" ? 'on':''}>뷰티</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"디저트/커피/차")} className={para === "디저트/커피/차" ? 'on':''}>디저트/커피/차</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"건강")} className={para === "건강" ? 'on':''}>건강</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"발사믹/오일")} className={para === "발사믹/오일" ? 'on':''}>발사믹/오일</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"와인/위스키/전통주")} className={para === "와인/위스키/전통주" ? 'on':''}>와인/위스키/전통주</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"꽃")} className={para === "꽃" ? 'on':''}>꽃</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"신선")} className={para === "신선" ? 'on':''}>신선</a></li>
                            <li><a href="!#" onClick={(e)=>onClickTabBtn(e,"리빙/주방")} className={para === "리빙/주방" ? 'on':''}>리빙/주방</a></li>
                        </ul>
                    </nav>
                    <div className="slide-container">
                        <div className="slide-view">                            
                            <Section9SlideWrapSlide  상품={state.상품} />
                        </div>
                        <a href="!#" className='arrow-next-btn'><img src="./img/intro/slide_arrow_white.svg" alt="" /></a>
                        <a href="!#" className='arrow-prev-btn'><img src="./img/intro/slide_arrow_white.svg" alt="" /></a>
                    </div>  
                </div>    
            </div>    
        </section>
    );
};
