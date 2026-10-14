import React from 'react'

function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
      padding: '20px',
      color: '#333'
    }}>

      {/* Navbar */}
      <nav style={{
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: '0' }}>My Website</h2>
        <p style={{ margin: '5px 0 0' }}>
          Welcome to my React application
        </p>
      </nav>

      {/* Main Heading */}
      <h1 style={{
        color: '#1d4ed8',
        fontSize: '32px',
        textAlign: 'center',
        marginBottom: '15px'
      }}>
        Welcome to Home Page
      </h1>

      {/* Paragraph */}
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        textAlign: 'justify',
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '8px'
      }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nesciunt harum, ipsam magni error eos ut velit tenetur,
        quas vel recusandae libero aliquam molestias repellendus
        maiores. Quaerat, dignissimos deleniti.
      </p>

      {/* Image */}
      <img
        src="https://picsum.photos/600/250"
        alt="Sample landscape"
        style={{
          width: '100%',
          maxWidth: '600px',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          margin: '20px auto'
        }}
      />

      {/* Input and Button */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#2563eb' }}>Contact Us</h2>

        <input
          type="text"
          placeholder="Enter your name"
          style={{
            padding: '12px',
            width: '90%',
            maxWidth: '400px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            marginBottom: '12px'
          }}
        />

        <br />

        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: '12px',
            width: '90%',
            maxWidth: '400px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            marginBottom: '12px'
          }}
        />

        <br />

        <button
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </div>

      {/* List */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>Our Services</h2>

        <ul style={{ lineHeight: '2', fontSize: '17px' }}>
          <li>Web Development</li>
          <li>React Development</li>
          <li>UI/UX Design</li>
          <li>Software Development</li>
        </ul>
      </div>

      {/* Link */}
      <a
        href="https://react.dev"
        target="_blank"
        rel="noreferrer"
        style={{
          color: '#2563eb',
          fontSize: '18px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Learn React
      </a>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        textAlign: 'center',
        padding: '15px',
        marginTop: '25px',
        borderRadius: '8px'
      }}>
        <p style={{ margin: '0' }}>
          © 2026 My Website | All Rights Reserved
        </p>
      </footer>

    </div>
  )
}

export default Home