import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../images/blog62.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to={`/posts/1234/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/1234/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post header</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut
          quas incidunt, dicta explicabo quibusdam quo tenetur error assumenda
          odit impedit, ex dolore doloribus natus! Perferendis obcaecati totam
          in velit.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit saepe
          voluptates esse officiis officia? Animi tempora atque error facilis
          fuga ab perspiciatis dolore id praesentium, fugiat impedit iure ut
          libero quisquam consequuntur repudiandae saepe blanditiis. Aspernatur
          quia accusamus quod sapiente error nam maxime ratione culpa deserunt,
          eos distinctio! Reiciendis aliquam, doloribus dicta esse quia quos
          consequatur error, sint ducimus reprehenderit dolores quae perferendis
          consectetur in ullam quidem iusto vero. Nulla molestias velit dolorem
          minima, iure deserunt aliquam, dolor omnis ratione rem vero. Ea animi
          consequuntur sit deleniti pariatur voluptatum, quam quae cupiditate
          beatae tempora neque magnam laudantium nihil libero sed. Recusandae
          non suscipit excepturi architecto odio possimus numquam voluptates in!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sed minus
          deserunt ipsum officia veniam nemo dolorum, esse, autem saepe ex
          reiciendis est at repellat voluptatem veritatis quasi! Vel odio,
          repudiandae modi, beatae deserunt dolorem iusto nihil laborum,
          officiis cumque tempore! Eos facilis aut doloremque officiis adipisci
          eum sed, quam error veniam corporis similique saepe.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius veniam
          sequi magni fugit natus quibusdam, perferendis asperiores voluptas aut
          eaque autem voluptate nesciunt optio aspernatur cupiditate amet
          expedita aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut unde
          eius, commodi ipsam nesciunt, architecto voluptate culpa magnam, et
          nemo neque repellat fuga natus ab molestias iusto placeat excepturi
          fugiat? Repudiandae nam, ipsam quibusdam amet deserunt voluptas
          molestias distinctio quia voluptates tempora, quis, et consequatur
          doloribus! Quasi in aut commodi perferendis vero sit. Autem ducimus
          voluptatem ab, rem officia voluptatibus error quibusdam in consectetur
          deleniti? Laboriosam perferendis molestiae facilis, sequi
          reprehenderit dolorem inventore quis porro iure consequatur ut debitis
          beatae nihil a harum maiores distinctio exercitationem facere aperiam.
          Nemo veniam debitis natus quaerat sint suscipit quisquam incidunt,
          explicabo dolor error at voluptates aliquid beatae adipisci nam libero
          sed a inventore. Quia architecto dicta sapiente necessitatibus, eius
          laboriosam dolores nulla magnam. Voluptas sequi enim totam numquam
          maxime itaque accusamus optio perferendis architecto odit quis ea
          magnam aut magni, velit nemo? Explicabo amet omnis harum voluptatum
          laboriosam voluptas magni atque dolorem deserunt tenetur esse,
          quibusdam exercitationem sed deleniti alias veritatis. Rerum porro
          debitis totam, neque fugit ullam, in eos explicabo numquam labore
          alias culpa corrupti molestias nam ipsa. Maxime nulla reiciendis non
          amet corrupti excepturi eligendi suscipit adipisci, earum doloremque
          porro consequuntur incidunt similique debitis voluptates dolore culpa
          quisquam repellendus eos! Iusto.
        </p>
      </div>
    </section>
  );
};
export default PostDetail;
