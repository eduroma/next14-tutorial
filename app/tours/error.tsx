'use client'

function error({error}: {error:Error}) {
  return (
    <div className="text-red-500">there was an error</div>
  )
}

export default error