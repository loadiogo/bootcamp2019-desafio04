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
          avatar:
            "https://media.licdn.com/dms/image/C4D03AQFuTp3PCVnMZA/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=nmYtZVxnpsl9JSrw5Nh5wzLhP82f1H13bjqGdZ17y3E"
        },
        date: "01 Aug 2019",
        content: "E ai Diogo, ta entendendo o que esta desenvolvendo?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://media.licdn.com/dms/image/C4D03AQF8tYAjGopniw/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=Ru2byPTpDWAJKw8Tgk3oRz8RL540OtaO2OHKYAwu7L4"
            },
            content: "Comentário legal do diego"
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://media.licdn.com/dms/image/C4D03AQF8tYAjGopniw/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=Ru2byPTpDWAJKw8Tgk3oRz8RL540OtaO2OHKYAwu7L4"
            },
            content: "Comentário2 legal do diego"
          },
          {
            id: 4,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://media.licdn.com/dms/image/C4D03AQF8tYAjGopniw/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=Ru2byPTpDWAJKw8Tgk3oRz8RL540OtaO2OHKYAwu7L4"
            },
            content: "Comentário3 legal do diego"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Diogo Henrique",
          avatar:
            "https://media.licdn.com/dms/image/C4D03AQFuTp3PCVnMZA/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=nmYtZVxnpsl9JSrw5Nh5wzLhP82f1H13bjqGdZ17y3E"
        },
        date: "01 Aug 2019",
        content: "O Kato é meu amigo e vai me salvar do CSS!!!!",
        comments: [
          {
            id: 1,
            author: {
              name: "Henrique Kato",
              avatar:
                "https://media.licdn.com/dms/image/C5603AQEoi3By-_jO0Q/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=44fxKc6BwjyqXxTyI0a4kMbPrYRd3cBAVtNmFvmiZEk"
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
      <div className="postlist">
        {this.state.posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
