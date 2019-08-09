import React, { Component } from "react";
import PostItem from "./PostItem";

// import { Container } from './styles';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Diogo Henrique",
          avatar: "http://"
        },
        date: "01 Aug 2019",
        content: "E ai Diogo, ta entendendo o que esta desenvolvendo?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "http://"
            },
            content: "Comentário legal do diego"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "http://"
            },
            content: "Comentário2 legal do diego"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "http://"
            },
            content: "Comentário3 legal do diego"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Diogo Henrique",
          avatar: "http://"
        },
        date: "01 Aug 2019",
        content: "O Kato é meu amigo e vai me salvar do CSS!!!!",
        comments: [
          {
            id: 2,
            author: {
              name: "Henrique Kato",
              avatar: "http://"
            },
            content:
              "Mano, e quem vai me salvar do CSS que voce quer que eu te salve?"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}
