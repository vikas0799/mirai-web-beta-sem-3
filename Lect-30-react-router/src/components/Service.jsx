import React from 'react'

function Service() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      padding: '20px',
      color: '#333'
    }}>

      {/* Header */}
      <header style={{
        backgroundColor: '#7c3aed',
        color: 'white',
        padding: '25px',
        textAlign: 'center',
        borderRadius: '10px',
        marginBottom: '25px'
      }}>
        <h1 style={{
          fontSize: '32px',
          margin: '0 0 10px'
        }}>
          Our Services
        </h1>

        <p style={{
          fontSize: '16px',
          margin: '0'
        }}>
          We provide the best services for your business
        </p>
      </header>

      {/* Introduction */}
      <section style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '25px'
      }}>
        <h2 style={{ color: '#7c3aed' }}>
          What We Do
        </h2>

        <p style={{
          fontSize: '17px',
          lineHeight: '1.8'
        }}>
          We help businesses grow by providing modern web development,
          creative design and digital solutions using the latest
          technologies.
        </p>
      </section>

      {/* Service Cards */}
      <h2 style={{
        textAlign: 'center',
        color: '#7c3aed',
        marginBottom: '20px'
      }}>
        Our Popular Services
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>

        {/* Card 1 */}
        <div style={{
          backgroundColor: 'white',
          width: '280px',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <img
            src="https://picsum.photos/300/150?random=1"
            alt="Web Development"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />

          <h3 style={{ color: '#7c3aed' }}>
            Web Development
          </h3>

          <p style={{
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            We create modern, responsive and user-friendly websites.
          </p>

          <button style={{
            backgroundColor: '#7c3aed',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Explore More
          </button>
        </div>

        {/* Card 2 */}
        <div style={{
          backgroundColor: 'white',
          width: '280px',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <img
            src="https://picsum.photos/300/150?random=2"
            alt="UI UX Design"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />

          <h3 style={{ color: '#7c3aed' }}>
            UI/UX Design
          </h3>

          <p style={{
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            We design attractive interfaces for a better user experience.
          </p>

          <button style={{
            backgroundColor: '#7c3aed',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Explore More
          </button>
        </div>

        {/* Card 3 */}
        <div style={{
          backgroundColor: 'white',
          width: '280px',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <img
            src="https://picsum.photos/300/150?random=3"
            alt="React Development"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />

          <h3 style={{ color: '#7c3aed' }}>
            React Development
          </h3>

          <p style={{
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            We build interactive and fast web applications using React.
          </p>

          <button style={{
            backgroundColor: '#7c3aed',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Explore More
          </button>
        </div>

      </div>

      {/* Contact Section */}
      <section style={{
        backgroundColor: '#ede9fe',
        padding: '25px',
        textAlign: 'center',
        borderRadius: '10px',
        marginTop: '30px'
      }}>
        <h2 style={{ color: '#5b21b6' }}>
          Need Our Services?
        </h2>

        <p style={{ fontSize: '16px' }}>
          Contact us today to discuss your project.
        </p>

        <button style={{
          backgroundColor: '#5b21b6',
          color: 'white',
          padding: '12px 25px',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Contact Us
        </button>
      </section>

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
          © 2026 Our Services | All Rights Reserved
        </p>
      </footer>

    </div>
  )
}

export default Service