import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Admin() {
  const ADMIN_PASSWORD = "legend7412";

  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (loggedIn) {
      fetchArticles();
    }
  }, [loggedIn]);

  async function fetchArticles() {
    setLoading(true);

    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      alert(error.message);
    } else {
      setArticles(data || []);
    }

    setLoading(false);
  }

  async function uploadImage() {
    if (!imageFile) return image;

    const fileName = `${Date.now()}-${imageFile.name}`;

    const { error } = await supabase.storage
      .from("article-images")
      .upload(fileName, imageFile);

    if (error) {
      alert(error.message);
      return null;
    }

    const { data } = supabase.storage
      .from("article-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  function clearForm() {
    setEditingId(null);

    setTitle("");
    setImage("");
    setImageFile(null);
    setPreview("");
    setExcerpt("");
    setContent("");
    setCategory("");
  }

  async function saveArticle() {
    if (
      !title ||
      !excerpt ||
      !content ||
      !category
    ) {
      alert("Please complete all fields.");
      return;
    }

    let imageUrl = image;

    if (imageFile) {
      const uploaded = await uploadImage();

      if (!uploaded) return;

      imageUrl = uploaded;
    }

    if (editingId) {
      const { error } = await supabase
        .from("articles")
        .update({
          title,
          image: imageUrl,
          excerpt,
          content,
          category,
        })
        .eq("id", editingId);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Article updated successfully.");
    } else {
      const { error } = await supabase
        .from("articles")
        .insert([
          {
            title,
            image: imageUrl,
            excerpt,
            content,
            category,
          },
        ]);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Article published successfully.");
    }

    clearForm();
    fetchArticles();
  }

  async function deleteArticle(id) {
    const ok = window.confirm(
      "Delete this article?"
    );

    if (!ok) return;

    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchArticles();
  }

  function editArticle(article) {
    setEditingId(article.id);

    setTitle(article.title);
    setImage(article.image || "");
    setPreview(article.image || "");
    setExcerpt(article.excerpt);
    setContent(article.content);
    setCategory(article.category);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const filteredArticles = articles.filter(
    (article) =>
      article.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      article.category
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  if (!loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f7fb",
        }}
      >
        <div
          style={{
            width: "420px",
            background: "#fff",
            padding: "35px",
            borderRadius: "15px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Legendary Trends
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "25px",
            }}
          >
            Admin Login
          </p>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={inputStyle}
          />

          <button
            style={primaryButton}
            onClick={() => {
              if (
                password === ADMIN_PASSWORD
              ) {
                setLoggedIn(true);
              } else {
                alert("Wrong password");
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
    return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
              }}
            >
              Legendary Trends CMS
            </h1>

            <p
              style={{
                color: "#666",
                marginTop: "8px",
              }}
            >
              Manage your news website
            </p>
          </div>

          <button
            style={{
              ...primaryButton,
              width: "160px",
              background: "#dc2626",
            }}
            onClick={() => {
              setLoggedIn(false);
              setPassword("");
            }}
          >
            Logout
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div style={cardStyle}>
            <h3>Total Articles</h3>

            <h1>{articles.length}</h1>
          </div>

          <div style={cardStyle}>
            <h3>Gaming</h3>

            <h1>
              {
                articles.filter(
                  (a) =>
                    a.category ===
                    "gaming"
                ).length
              }
            </h1>
          </div>

          <div style={cardStyle}>
            <h3>Movies</h3>

            <h1>
              {
                articles.filter(
                  (a) =>
                    a.category ===
                    "movies"
                ).length
              }
            </h1>
          </div>

          <div style={cardStyle}>
            <h3>Football</h3>

            <h1>
              {
                articles.filter(
                  (a) =>
                    a.category ===
                    "football"
                ).length
              }
            </h1>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "30px",
          }}
        >
          <div style={panelStyle}>
            <h2>
              {editingId
                ? "Edit Article"
                : "Publish Article"}
            </h2>

            <input
              placeholder="Article Title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <input
              placeholder="Image URL (optional)"
              value={image}
              onChange={(e) =>
                setImage(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <input
              type="file"
              accept="image/*"
              style={{
                marginBottom:
                  "15px",
              }}
              onChange={(e) => {
                const file =
                  e.target
                    .files?.[0];

                if (!file) return;

                setImageFile(
                  file
                );

                setPreview(
                  URL.createObjectURL(
                    file
                  )
                );
              }}
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit:
                    "cover",
                  borderRadius:
                    "10px",
                  marginBottom:
                    "15px",
                }}
              />
            )}

            <input
              placeholder="Short Excerpt"
              value={excerpt}
              onChange={(e) =>
                setExcerpt(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <textarea
              rows={12}
              placeholder="Write your article..."
              value={content}
              onChange={(e) =>
                setContent(
                  e.target.value
                )
              }
              style={
                textareaStyle
              }
            />

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              style={inputStyle}
            >
              <option value="">
                Select Category
              </option>

              <option value="gaming">
                Gaming
              </option>

              <option value="movies">
                Movies
              </option>

              <option value="football">
                Football
              </option>

              <option value="celebrities">
                Celebrities
              </option>

              <option value="technology">
              Technology
              </option>
            </select>

            <button
              style={
                primaryButton
              }
              onClick={
                saveArticle
              }
            >
              {editingId
                ? "Update Article"
                : "Publish Article"}
            </button>

            {editingId && (
              <button
                style={{
                  ...primaryButton,
                  marginTop:
                    "10px",
                  background:
                    "#6b7280",
                }}
                onClick={
                  clearForm
                }
              >
                Cancel Editing
              </button>
            )}
          </div>
                    <div style={panelStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2>All Articles</h2>

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                style={{
                  width: "220px",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            {loading ? (
              <p>Loading articles...</p>
            ) : filteredArticles.length === 0 ? (
              <p>No articles found.</p>
            ) : (
              filteredArticles.map((article) => (
                <div
                  key={article.id}
                  style={{
                    display: "flex",
                    gap: "15px",
                    padding: "15px 0",
                    borderBottom:
                      "1px solid #eee",
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: "120px",
                      height: "90px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <div
                    style={{
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 8px",
                      }}
                    >
                      {article.title}
                    </h3>

                    <p
                      style={{
                        margin: "0 0 10px",
                        color: "#666",
                      }}
                    >
                      {article.category}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={() =>
                          editArticle(article)
                        }
                        style={{
                          background: "#2563eb",
                          color: "#fff",
                          border: "none",
                          padding:
                            "10px 16px",
                          borderRadius:
                            "8px",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteArticle(
                            article.id
                          )
                        }
                        style={{
                          background: "#dc2626",
                          color: "#fff",
                          border: "none",
                          padding:
                            "10px 16px",
                          borderRadius:
                            "8px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 20px rgba(0,0,0,.08)",
};

const panelStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 5px 20px rgba(0,0,0,.08)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  resize: "vertical",
  outline: "none",
};

const primaryButton = {
  width: "100%",
  padding: "14px",
  background: "#0f172a",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "600",
};

export default Admin;