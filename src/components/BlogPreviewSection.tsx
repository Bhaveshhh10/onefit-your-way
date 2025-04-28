
const BlogPreviewSection = () => {
  const blogPosts = [
    {
      title: "Top 5 Home Workouts for Beginners",
      excerpt: "Start your fitness journey with these effective home workout routines that require minimal equipment.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
      date: "Apr 15, 2023",
      readTime: "5 min read"
    },
    {
      title: "How to Stick to Your Fitness Plan",
      excerpt: "Consistency is key. Learn proven strategies to stay motivated and committed to your fitness goals.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      date: "Mar 22, 2023",
      readTime: "7 min read"
    },
    {
      title: "Nutrition Myths Debunked",
      excerpt: "Our nutritionists tackle common misconceptions about diet and reveal science-backed facts.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
      date: "Feb 10, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Fitness Knowledge Hub</h2>
          <p className="section-subtitle">
            Expert insights, tips, and advice to support your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a 
              key={index} 
              href="#" 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-onefit-blue font-semibold">Read More →</div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="btn-secondary"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
