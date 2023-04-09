// Create an instance of AbortController
const controller = new AbortController()

// Get the signal for the controller, which you can pass to fetch()
const signal = controller.signal

// Make a fetch request with a timeout of 5 seconds
fetch('https://gogixer.com', { signal })
  .then((response) => {
    console.log('Response received')
  })
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled')
    } else {
      console.error('Request failed', error)
    }
  })

// Cancel the fetch request after 3 seconds
setTimeout(() => {
  controller.abort()
}, 3000)
