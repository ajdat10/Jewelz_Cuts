import React, { Component } from 'react'
// import Card from '../components/Card'
import { __DeleteAppointment } from '../services/AppointmentServices'
import { __GetProfile } from '../services/UserServices'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      postFetchError: false,
      appointments: []
    }
  }

  componentDidMount() {
    this.getAppointments()
  }

  getAppointments = async () => {
    try {
      console.log(this.props)
      const profileData = await __GetProfile(this.props.currentUser._id)
      this.setState({ appointments: profileData.appointments })
    } catch (error) {
      this.setState({ postFetchError: true })
    }
  }

  deleteAppointment = async (id) => {
    try {
      const appointmentsToKeep = this.state.posts.filter((appointment) => appointment._id !== id)
      this.setState({ appointments: appointmentsToKeep })
      await __DeleteAppointment(id)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="profile">
          <h1>Hi</h1>
        {/* <div>
          {this.state.posts.length ? (
            <div className="post-content wrapper flex-row">
              {this.state.posts.map((post) => (
                <div key={post._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/posts/${post._id}`)
                    }
                  >
                    <div className="mask flex-col">
                      <div className="card-content">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                      </div>
                    </div>
                    <img src={post.image_url} alt="sf" />
                  </Card>
                  <div className="flex-row button-wrapper">
                    <button
                      onClick={() =>
                        this.props.history.push(`/edit/${post._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => this.deletePost(post._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="span message">No Posts</div>
          )}
        </div> */}
      </div>
    )
  }
}
