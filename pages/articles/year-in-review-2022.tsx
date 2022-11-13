const YearInReview2022 = ({ articles }) => {
    return (
        <article className="prose prose-xl m-4 lg:mx-64 md:mx-32 sm:mx-16">
            <h1>Year In Review 2022</h1>

            <p>November 13, 2022</p>

            <h3 href="#Professional">Professional</h3>

            <p>foobar</p>

            <h3 href="#Personal">Personal</h3>

            <p>Meet Pepper the adorable australian shepherd that I adopted! She is weird in the best of ways. Her principle interests are treats, walks, and snuggling which I am happy to provide for her.</p>

            <img className="object-center" height="445" width="500" src="/pepper.png" />

            <h3 href="#Hobbies">Hobbies</h3>

            <p>foobar</p>

        </article>
    );
  };
  
  YearInReview2022.displayName = "YearInReview2022";
  export default YearInReview2022;