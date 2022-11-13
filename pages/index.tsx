import Link from "next/link";
import { GetStaticProps } from "next";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <img className="rounded-full h-36 w-36" src="/profile.png" />
      <h1 className="prose prose-2xl font-black">Christopher Bell</h1>
      <h1 className="prose prose-sm thin">Software Engineer</h1>
    </div>
  );
};

type ArticleProps = {
  id: string,
  title: string,
  date: string,
  description: string
}

const Article = ({ id, title, date, description }: ArticleProps) => {
  const link_href = `/articles/${id}`;
  return (
    <div className="m-2">
      <h1 className="prose prose-sm thin">{date}</h1>
      <h1 className="prose-xl font-black">{title}</h1>
      <h1>{description}</h1>
      <div className="py-2">
        <Link className="text-purple-600 font-semibold" href={link_href}>
          Read full article
        </Link>
      </div>
    </div>
  );
};

type HomeProps = {
  articles: ArticleProps[]
}

const Home = ({ articles }: HomeProps) => {
  return (
    <div className="m-8 lg:mx-64 md:mx-32 sm:mx-16 divide-y-2 divide-purple-400">
      <Profile />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-left justify-center">
          {articles.map(({ id, date, title, description }) => (
            <Article
              key={id}
              id={id}
              title={title}
              date={date}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Home";
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const articles = [
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    },
    {
      id: "template",
      date: "November 13, 2022",
      title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      description: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Gravida cum sociis natoque penatibus et magnis. Id semper risus in hendrerit gravida rutrum quisque. Faucibus purus in massa tempor nec feugiat nisl pretium. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Viverra aliquet eget sit amet tellus cras. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu."
    }
  ]
  return {
    props: {
      articles,
    },
  };
};