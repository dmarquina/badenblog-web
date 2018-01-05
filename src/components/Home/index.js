import React, { Component } from 'react';
import { Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import axios from 'axios';
import Posts from './../Posts';
import Filters from './../Filters';
import Searcher from './../Searcher';
import MaterialPagination from '../Pagination';
import Categoryfilter from '../Categoryfilter';


const ROOT = 'https://badenblog-api.herokuapp.com/';
const postsByCategoryEnpoint = 'post/byCategory';
const postsActiveEnpoint = 'post/actives';
const searchPostEnpoint = 'post/search/';

class Home extends Component {
  constructor(){
    super();

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
    this.onPageChangeFromPagination = this.onPageChangeFromPagination.bind(this);

    this.state = {
      filterEnpoint : "",
      searchField:"",
      categoriesSelected:[],
      posts :[],
      totalPages: 0,
      currentPage:0
    }
  }

  componentDidMount(){
    this.allActivePosts(0);
  }
  
  async onPageChangeFromPagination(newPage) {
    newPage--;
    switch(this.state.filterEnpoint){
      case searchPostEnpoint+this.state.searchField:
        this.searchPosts(this.state.searchField,newPage);
        break;
      case postsByCategoryEnpoint:
        this.postsByCategory(this.state.categoriesSelected,newPage);
        break;
      case postsActiveEnpoint:
        this.allActivePosts(newPage);
        break;  
      default:
        console.log(this.state.filterEnpoint);
        console.log("ERROR");
        break;
    }
    
  }
  
  async allActivePosts(newPage){
    const response = await axios.get(ROOT+postsActiveEnpoint+`?page=${newPage}&size=2`)
    const data = response.data;
    this.setState({ 
      filterEnpoint : postsActiveEnpoint,
      posts : data.content,
      totalPages: data.totalPages,
      currentPage: data.number + 1,
      })
  }

  async searchPosts(searchField,newPage) {
    const response = await axios.get(ROOT+searchPostEnpoint+searchField+`?page=${newPage}&size=2`)
    const data = response.data;
    this.setState({ 
      filterEnpoint : searchPostEnpoint+searchField,
      posts : data.content,
      totalPages: data.totalPages,
      currentPage: data.number + 1,
      })
  }

  async postsByCategory(categoriesSelected,newPage) {
    const response = await axios.post(ROOT+postsByCategoryEnpoint+`?page=${newPage}&size=2`, {
      idsCategories: categoriesSelected
    });
    const data = response.data;
    this.setState({ 
      filterEnpoint : postsByCategoryEnpoint,
      posts : data.content,
      totalPages: data.totalPages,
      currentPage: data.number + 1,
      })
  }

  handleSearch(searchField){
    this.setState({ categoriesSelected : [] })
    if(searchField && this.state.searchField!==searchField){
      this.searchPosts(searchField,0);
      this.setState({ searchField : searchField});
    }else if( searchField === "" && this.state.searchField!==searchField){
      this.allActivePosts(0);
      this.setState({ searchField : searchField});
    }
  }

  handleCategoryFilter(categoriesSelected){
    if(categoriesSelected && this.state.categoriesSelected !== categoriesSelected){
      if(categoriesSelected.length!==0){
        this.postsByCategory(categoriesSelected,0);
      }
      this.setState({ categoriesSelected : categoriesSelected })
    }
  }

  isEmpty(){
    return this.state.posts ? this.state.posts.length === 0 :  true
  }

  render() {
    return (
    	<div>
        <Searcher onClick = {this.handleSearch}/>
        <Row className="centralBody">
          <Col xs={12} md={3} lg={3}>
            <div>
              <Paper className='filterbox' children={
                <div>
                  <h2>Filtros</h2>
                  <Divider/>
                    <h3>Categorías</h3>
                      <Categoryfilter onClick = {this.handleCategoryFilter}/>
                </div>
                }/>
            </div>
          </Col>
          <Col xs={12} md={9} lg={9}>
          {          
            this.isEmpty()?
              <div>No hay posts lo sentimos</div>
              :
              <div>             
                <Posts posts={this.state.posts}/>
                <MaterialPagination currentPage={this.state.currentPage} totalPages={this.state.totalPages} 
                                    onChange={this.onPageChangeFromPagination} />
              </div>
          }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
