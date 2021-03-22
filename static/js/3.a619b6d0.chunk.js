(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{57:function(e,t,a){"use strict";var n,r,i,c=a(60),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function o(){i=!1}function l(e){if(e){if(e!==n){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,a){return t!==a.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,o()}}else n!==s&&(n=s,o())}function u(){return i||(i=function(){n||l(s);for(var e,t=n.split(""),a=[],r=c.nextValue();t.length>0;)r=c.nextValue(),e=Math.floor(r*t.length),a.push(t.splice(e,1)[0]);return a.join("")}())}e.exports={get:function(){return n||s},characters:function(e){return l(e),n},seed:function(e){c.seed(e),r!==e&&(o(),r=e)},lookup:function(e){return u()[e]},shuffled:u}},58:function(e,t,a){"use strict";e.exports=a(59)},59:function(e,t,a){"use strict";var n=a(57),r=a(61),i=a(65),c=a(66)||0;function s(){return r(c)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return c=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=i},60:function(e,t,a){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},61:function(e,t,a){"use strict";var n,r,i=a(62);a(57);e.exports=function(e){var t="",a=Math.floor(.001*(Date.now()-1567752802062));return a===r?n++:(n=0,r=a),t+=i(7),t+=i(e),n>0&&(t+=i(n)),t+=i(a)}},62:function(e,t,a){"use strict";var n=a(57),r=a(63),i=a(64);e.exports=function(e){for(var t,a=0,c="";!t;)c+=i(r,n.get(),1),t=e<Math.pow(16,a+1),a++;return c}},63:function(e,t,a){"use strict";var n,r="object"===typeof window&&(window.crypto||window.msCrypto);n=r&&r.getRandomValues?function(e){return r.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},64:function(e,t){e.exports=function(e,t,a){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,r=-~(1.6*n*a/t.length),i="";;)for(var c=e(r),s=r;s--;)if((i+=t[c[s]&n]||"").length===+a)return i}},65:function(e,t,a){"use strict";var n=a(57);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},66:function(e,t,a){"use strict";e.exports=0},67:function(e,t,a){e.exports={error_span:"ErrorMessage_error_span__10TNY"}},68:function(e,t,a){e.exports={input_container:"SearchMovies_input_container__tr3Xo",input_wrap:"SearchMovies_input_wrap__MqZrz",header_input:"SearchMovies_header_input__16EGR",input_icon:"SearchMovies_input_icon__30e_o",submit_button:"SearchMovies_submit_button__FItZd"}},69:function(e,t,a){e.exports={container:"Navigation_container__N2E2r",nav_container:"Navigation_nav_container__3OgLx",header_container:"Navigation_header_container__1nMId",nav_list:"Navigation_nav_list__37N87",nav_item:"Navigation_nav_item__1OJVp",home_link:"Navigation_home_link__8qtfT",current:"Navigation_current__2QwGO",library_link:"Navigation_library_link__3Au-O"}},70:function(e,t,a){e.exports={header:"Header_header__1VCKf"}},71:function(e,t,a){"use strict";var n=a(10),r=a(11),i=a(17),c=a(16),s=a(0),o=a(18),l=a(67),u=a.n(l),h=a(3),m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:u.a.error_span,children:"Search result not successful. Enter the correct movie name!"})})},_=a.p+"static/media/sprite.3bfe804a.svg",v=a(68),p=a.n(v),f=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={inputValue:"",submit:!1},e.onInputChange=function(t){e.setState({inputValue:t.target.value})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.onSubmit;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:p.a.input_container,children:Object(h.jsx)("div",{className:p.a.input_wrap,children:Object(h.jsxs)("form",{id:"search-form-js",onSubmit:function(a){a.preventDefault();var n=a.target.elements.query.value;return a.target.elements.query.value="",e.setState({submit:!0}),t(n)},children:[Object(h.jsx)("input",{type:"text",name:"query",autoComplete:"off",className:p.a.header_input,placeholder:"Search films",onChange:function(t){e.onInputChange(t)}}),Object(h.jsx)("svg",{width:"12",height:"12",className:p.a.input_icon,children:Object(h.jsx)("use",{href:_+"#icon-search"})}),Object(h.jsx)("button",{className:p.a.submit_button,type:"submit",children:"Search"})]})})}),""===this.state.inputValue&&!0===this.state.submit&&Object(h.jsx)(m,{})]})}}]),a}(s.Component),d=a(69),j=a.n(d),b=function(e){var t=e.props,a="".concat(j.a.container," ").concat(j.a.nav_container),n=t.props.history.location.pathname;return Object(h.jsx)("div",{className:a,children:Object(h.jsxs)("div",{className:j.a.header_container,children:[Object(h.jsxs)("ul",{className:j.a.nav_list,children:[Object(h.jsx)("li",{className:j.a.nav_item,children:Object(h.jsx)(o.b,{exact:!0,to:"/",id:"home",className:j.a.home_link,activeClassName:j.a.current,children:"Home"})}),"/"===n&&Object(h.jsx)("li",{className:j.a.nav_item,children:Object(h.jsx)(o.b,{to:"/movies",className:j.a.library_link,activeClassName:j.a.current,children:"Movies"})}),"/movies"===n||n==="/movies/".concat(t.props.match.params.movieId)||n==="/movies/".concat(t.props.match.params.movieId,"/cast")||n==="/movies/".concat(t.props.match.params.movieId,"/reviews")?Object(h.jsx)("li",{className:j.a.nav_item,children:Object(h.jsx)(o.b,{to:"".concat(t.props.prevLocation),className:j.a.library_link,children:"Back"})}):null]}),"/movies"===n?Object(h.jsx)(f,{onSubmit:t.onSubmit}):null]})})},g=a(70),x=a.n(g),O=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.props.match.url.length<=8&&this.props.props.onChangePath(this.props.props.match.url)}},{key:"render",value:function(){return Object(h.jsx)("header",{className:x.a.header,children:Object(h.jsx)(b,{props:this.props})})}}]),a}(s.Component);t.a=O},74:function(e,t,a){e.exports={castContainer:"Cast_castContainer__1W1HM",castItem:"Cast_castItem__3aqzL",profileImage:"Cast_profileImage__QWp_W",actorsName:"Cast_actorsName__2EMUI",actorsRole:"Cast_actorsRole__248XY"}},75:function(e,t,a){e.exports={reviewsContainer:"Reviews_reviewsContainer__3q7wD",reviewItem:"Reviews_reviewItem__B6Var",reviewerName:"Reviews_reviewerName__RIg_e",reviewText:"Reviews_reviewText__3YnS1"}},76:function(e,t,a){e.exports={movie:"MovieDetailsCard_movie__19r5i",movie__cover:"MovieDetailsCard_movie__cover__33z21",movie__containerInfo:"MovieDetailsCard_movie__containerInfo__OdVMD",movie__title:"MovieDetailsCard_movie__title__djNPn",movie_title_h2:"MovieDetailsCard_movie_title_h2__3SQk4",movie__characteristics:"MovieDetailsCard_movie__characteristics__gx6hu",movie_characteristics_title:"MovieDetailsCard_movie_characteristics_title__1wQjn",movie_characteristics_black:"MovieDetailsCard_movie_characteristics_black__-T4yt",movie_characteristics_orange:"MovieDetailsCard_movie_characteristics_orange__1MCKn",movie_characteristics_grey:"MovieDetailsCard_movie_characteristics_grey__dbbjx",movie__description:"MovieDetailsCard_movie__description__DuNM4",buttonContainer:"MovieDetailsCard_buttonContainer__1babC",castLink:"MovieDetailsCard_castLink__1YoG5",reviewsLink:"MovieDetailsCard_reviewsLink__3pUy4"}},79:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),i=a(17),c=a(16),s=a(0),o=a(19),l=a(71),u=a(1),h=a(18),m=a.p+"static/media/profilePhotoPlaceholder.d5ae1b8f.webp",_=a(74),v=a.n(_),p=a(3),f=new o.a,d=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={actors:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.movieId=this.props.match.params.movieId,f.fetchFilmsActors().then((function(t){e.setState({actors:t.cast})}))}},{key:"render",value:function(){var e=this.state.actors;return Object(p.jsx)("ul",{className:v.a.castContainer,children:e.map((function(e){return null!==e.profile_path?Object(p.jsxs)("li",{className:v.a.castItem,children:[Object(p.jsx)("img",{className:v.a.profileImage,src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name}),Object(p.jsxs)("p",{className:v.a.actorsName,children:["Name: ",e.name]}),Object(p.jsxs)("p",{className:v.a.actorsRole,children:["Role name: ",e.character]})]},e.cast_id):Object(p.jsxs)("li",{className:v.a.castItem,children:[Object(p.jsx)("img",{className:v.a.profileImage,src:"".concat(m),alt:e.name}),Object(p.jsxs)("p",{className:v.a.actorsName,children:["Name: ",e.name]}),Object(p.jsxs)("p",{className:v.a.actorsRole,children:["Role name: ",e.character]})]},e.cast_id)}))})}}]),a}(s.Component),j=function(){function e(){var t=this;Object(n.a)(this,e),this.setPage=function(){return t.pageNumber+=1},this.decreasePage=function(){return t.pageNumber-=1},this.resetPage=function(){return t.pageNumber=1},this.setFetchPage=function(){return t.fetchPageNumber+=1},this.resetFetchPage=function(){return t.fetchPageNumber=1},this.fetchPopularFilms=function(){var e="trending/movie/day?api_key=".concat(t.API_KEY,"&language=").concat(t.language,"&page=").concat(t.fetchPageNumber),a="".concat(t.baseUrl).concat(e);return fetch(a).then((function(e){return e.json()})).then((function(e){return e.results}))},this.fetchSearchFilms=function(){var e="search/movie?api_key=".concat(t.API_KEY,"&language=").concat(t.language,"&page=").concat(t.fetchPageNumber,"&include_adult=false&query=").concat(t.queryValue),a="".concat(t.baseUrl).concat(e);return fetch(a).then((function(e){return e.json()})).then((function(e){return e.results}))},this.fetchFilmsDetails=function(){var e="movie/".concat(t.movieId,"?api_key=").concat(t.API_KEY,"&language=").concat(t.language,"&page=").concat(t.fetchPageNumber,"&include_adult=false"),a="".concat(t.baseUrl).concat(e);return fetch(a).then((function(e){return e.json()})).then((function(e){return e}))},this.fetchFilmsActors=function(){var e="movie/".concat(t.movieId,"/credits?api_key=").concat(t.API_KEY,"&language=").concat(t.language,"&page=").concat(t.fetchPageNumber,"&include_adult=false"),a="".concat(t.baseUrl).concat(e);return fetch(a).then((function(e){return e.json()})).then((function(e){return e}))},this.fetchFilmsReviews=function(){var e="movie/".concat(t.movieId,"/reviews?api_key=").concat(t.API_KEY,"&language=").concat(t.language,"&page=").concat(t.fetchPageNumber,"&include_adult=false"),a="".concat(t.baseUrl).concat(e);return fetch(a).then((function(e){return e.json()})).then((function(e){return e.results}))},this.baseUrl="https://api.themoviedb.org/3/",this.API_KEY="72466121c9676fc22348299f38033287",this.query="",this.language="en-US",this.movieId="",this.fetchPageNumber=1,this.pageNumber=1}return Object(r.a)(e,[{key:"queryValue",get:function(){return this.query},set:function(e){this.query=e}}]),e}(),b=a(75),g=a.n(b),x=new j,O=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.movieId=this.props.match.params.movieId,x.fetchFilmsReviews().then((function(t){e.setState({reviews:t})}))}},{key:"render",value:function(){var e=this.state.reviews;return Object(p.jsx)("ul",{className:g.a.reviewsContainer,children:e.map((function(e){return Object(p.jsxs)("li",{className:g.a.reviewItem,children:[Object(p.jsxs)("p",{className:g.a.reviewerName,children:["Author: ",e.author]}),Object(p.jsx)("p",{className:g.a.reviewText,children:e.content})]},e.id)}))})}}]),a}(s.Component),N=a(58),w=a.n(N),y=a.p+"static/media/no_poster.f17d2397.png",C=a(76),I=a.n(C),k=function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.movieDetails.poster_path),a=e.movieDetails,n=a.original_title,r=a.vote_average,i=a.vote_count,c=a.popularity,s=a.genres,o=a.overview,l="".concat(I.a.movie__title," ").concat(I.a.movie_title_h2);return Object(p.jsxs)("div",{className:I.a.movie,children:[Object(p.jsx)("img",{src:t,alt:n,className:I.a.movie__cover}),Object(p.jsxs)("div",{className:I.a.movie__containerInfo,children:[Object(p.jsx)("h1",{className:I.a.movie__title,children:n}),Object(p.jsxs)("ul",{className:I.a.movie__characteristics,children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:I.a.movie_characteristics_title,children:"Vote / Votes"}),Object(p.jsx)("span",{className:I.a.movie_characteristics_orange,children:r}),"\xa0/\xa0",Object(p.jsx)("span",{className:I.a.movie_characteristics_grey,children:i})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:I.a.movie_characteristics_title,children:"Popularity"}),Object(p.jsx)("span",{className:I.a.movie_characteristics_black,children:c})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:I.a.movie_characteristics_title,children:"Original Title"}),Object(p.jsx)("span",{className:I.a.movie_characteristics_black,children:n})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{className:I.a.movie_characteristics_title,children:"Genre"}),void 0!==s&&s.map((function(e,t){return Object(p.jsx)("span",{className:I.a.movie_characteristics_black,children:s.length!==t+1?"".concat(e.name,","):"".concat(e.name)},w.a.generate())}))]})]}),Object(p.jsx)("h2",{className:l,children:"About"}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:I.a.movie__description,children:o})}),Object(p.jsxs)("div",{className:I.a.buttonContainer,children:[Object(p.jsx)(h.b,{to:"".concat(e.props.match.url,"/cast"),className:I.a.castLink,activeClassName:I.a.active,children:"Cast"}),Object(p.jsx)(h.b,{to:"".concat(e.props.match.url,"/reviews"),className:I.a.reviewsLink,activeClassName:I.a.active,children:"Reviews"})]}),Object(p.jsx)(u.a,{path:"/movies/:movieId/cast",component:d}),Object(p.jsx)(u.a,{path:"/movies/:movieId/reviews",component:O})]})]})};k.defaultProps={poster_path:y,original_title:"Film title",vote_average:"Vote average",vote_count:"Vote count",popularity:"Popularity",release_date:"Release date"};var M=k,D=new o.a,P=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={movieDetails:{}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.movieId=this.props.match.params.movieId,D.fetchFilmsDetails().then((function(t){e.setState({movieDetails:t})}))}},{key:"render",value:function(){var e=this.state.movieDetails;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{props:this.props}),Object(p.jsx)(M,{props:this.props,movieDetails:e})]})}}]),a}(s.Component);t.default=P}}]);
//# sourceMappingURL=3.a619b6d0.chunk.js.map