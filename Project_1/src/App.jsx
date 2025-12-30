import Card2 from './components/Card2'

const App = () => {
  const jobOpenings = [
    {
        brandLogo: "https://www.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?w=263&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&pid=3.1&rm=2&ucfimg=1", // Placeholder for Google
        companyName: "Google",
        datePosted: "3 days ago",
        post: "Software Engineer III (Cloud)",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "₹35,00,000/yr",
        location: "Hyderabad, India"
    },
    {
        brandLogo: "data:image/webp;base64,UklGRrwDAABXRUJQVlA4ILADAAAQGQCdASqfALQAPp1Ook0lpKMiIvXYmLATiWdu4W/RBy8/szjAaH/kpXkc5ox/Gu1LHZyd+EHaf3QeAGkd/QPK96Aec16l9gvygPXr+2Psj/rGIbsSMvkFRw6cbuALAWAsBV4T+Nl0hClJOuDvbrZ2Q3zJHaI+XnvcntnVIy9xJZ89isIR8h/4CaXu0zBb+4mThFEkTUEc/GzDv2mI+LFitOR6NMOyRL26TzpuylVURUNI/2Rftmu0wfxDBUcZ9DjdwBYCwFgLAWAsiGPhj4XMAAD+/nZyLYmix2Hl6rLCDOgg3d8L3ig3IzKJc/ZSJIyG0a9tozqpxCNql3hiA5T+M6xyAtK4MiQsRxg4h3gqsvQoEKKNYx6YzsGzNhwLTu0mYeg5LBrPL8mUtd40vlulo1QrhMNDfg/tvmAQUrdWuMvJ+E5kRrWrwMtMI+2LzLpAx/KJ4PWVdATqx5gaImfV0FcvgvBcFOLIrW4C5RDkA2eN84womv9MiP/J00cxdrH1MAlba8ct/cRpMCMcEXPEfwnp/leV7TYLpw5P2/TgkapQmGX+H49nqLCTeKxWoHWGUtMl3I80wGWz5LCW/SxGJmpiMMpsPSCIzz27GzJBMbK4F/n/zWwVFkogoZ44TsUCslQWRwgSagPyrogCQS4zhg2Jv7gfTZ8S4jbhzrovRyJwtwA03ZFF/d9nWhBsgGJHQ9QF7n+kR3CwzcVlv//vTp4MjViihOEcRHp9LUSuN3MoCJUwY1q0EMLN7zs6gzpCQ+1aNIepCo6EGb0od98CLMCpXxOKd4STaNe+rHwPaqH+BDTGxMbaW1mBaISvtXWEs+sagYzekzkhjIrXAf61EBjpyFZR8muirdx5tB5SuST1UTkisA179FP8dZjDdl7IZoE4vzwVcdGoWfsP0PuTzcWXztM/jfxpAXTlxaaRPUka+NHZan7ivt3fsKWDIxn96vlMf6Spkxl7vq/xKh7j9JmWba9b5eU+ruhCGfPux/NDR6gKlG3m11u3wRFJt8wXaHbszF9FmHb9eKk0f12qxVWFTp4NspVGUMmfi7JpY+yJ5tiXVEV2Yq0df+1lBz30e2Qbv09o9nyDwrvZE1z7Zb44DQ4jncXerCkEupmW2TGRmImL+QYLjiuMJ3PNGspBx2fLK1Oj+x/xSvCPGfYUtH7fpwxp0Ni6BiVm7RUeWKOBaV9o9P2n6V+z7Ahof/o0rMyeWPrOO+4W/0bGP0PyJzLT645QAACL5MZ6AAAAAA==", // Placeholder for Amazon
        companyName: "Amazon",
        datePosted: "1 week ago",
        post: "Cloud Support Associate (L2)",
        tag1: "Part Time",
        tag2: "Junior Level",
        pay: "$45/hr",
        location: "Seattle, US (Remote)"
    },
    {
        brandLogo: "https://tse1.mm.bing.net/th/id/OIP.3ZAZvzn_3ypWLvFrRYN5iAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", // Placeholder for Meta
        companyName: "Meta",
        datePosted: "2 weeks ago",
        post: "Product Manager (AR/VR)",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$180k/yr",
        location: "Menlo Park, US"
    },
    {
        brandLogo: "https://i0.wp.com/albertaiot.com/wp-content/uploads/2018/09/member-icon-microsoft.jpg?ssl=1", // Placeholder for Microsoft
        companyName: "Microsoft",
        datePosted: "4 days ago",
        post: "Data & Applied Scientist",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "₹28,00,000/yr",
        location: "Bangalore, India"
    },
    {
        brandLogo: "https://th.bing.com/th/id/OIP._Rw7L7Pnc5rUEg-__HVgdwHaHa?w=184&h=184&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1", // Placeholder for Apple
        companyName: "Apple",
        datePosted: "1 month ago",
        post: "Senior UI/UX Designer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$175k/yr",
        location: "Cupertino, US"
    },
    {
        brandLogo: "https://th.bing.com/th/id/OIP.tnBrElaA8T9bZrERry2kAQHaFj?w=253&h=190&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1", // Placeholder for Netflix
        companyName: "Netflix",
        datePosted: "5 days ago",
        post: "Production Coordinator",
        tag1: "Contract",
        tag2: "Junior Level",
        pay: "$60/hr",
        location: "Los Angeles, US"
    },
    {
        brandLogo: "https://th.bing.com/th/id/OIP.krBZczKOHGhMinBX6_AVTgAAAA?w=200&h=200&c=10&o=6&cb=ucfimg1&pid=genserp&rm=2&ucfimg=1", // Placeholder for Tesla
        companyName: "Tesla",
        datePosted: "3 weeks ago",
        post: "Firmware Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$150k/yr",
        location: "Austin, US"
    },
    {
        brandLogo: "https://www.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?w=263&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&pid=3.1&rm=2&ucfimg=1", // Placeholder for Google
        companyName: "Google",
        datePosted: "10 weeks ago",
        post: "Marketing Analyst (EMEA)",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "€75,000/yr",
        location: "Dublin, Ireland"
    },
    {
        brandLogo: "data:image/webp;base64,UklGRrwDAABXRUJQVlA4ILADAAAQGQCdASqfALQAPp1Ook0lpKMiIvXYmLATiWdu4W/RBy8/szjAaH/kpXkc5ox/Gu1LHZyd+EHaf3QeAGkd/QPK96Aec16l9gvygPXr+2Psj/rGIbsSMvkFRw6cbuALAWAsBV4T+Nl0hClJOuDvbrZ2Q3zJHaI+XnvcntnVIy9xJZ89isIR8h/4CaXu0zBb+4mThFEkTUEc/GzDv2mI+LFitOR6NMOyRL26TzpuylVURUNI/2Rftmu0wfxDBUcZ9DjdwBYCwFgLAWAsiGPhj4XMAAD+/nZyLYmix2Hl6rLCDOgg3d8L3ig3IzKJc/ZSJIyG0a9tozqpxCNql3hiA5T+M6xyAtK4MiQsRxg4h3gqsvQoEKKNYx6YzsGzNhwLTu0mYeg5LBrPL8mUtd40vlulo1QrhMNDfg/tvmAQUrdWuMvJ+E5kRrWrwMtMI+2LzLpAx/KJ4PWVdATqx5gaImfV0FcvgvBcFOLIrW4C5RDkA2eN84womv9MiP/J00cxdrH1MAlba8ct/cRpMCMcEXPEfwnp/leV7TYLpw5P2/TgkapQmGX+H49nqLCTeKxWoHWGUtMl3I80wGWz5LCW/SxGJmpiMMpsPSCIzz27GzJBMbK4F/n/zWwVFkogoZ44TsUCslQWRwgSagPyrogCQS4zhg2Jv7gfTZ8S4jbhzrovRyJwtwA03ZFF/d9nWhBsgGJHQ9QF7n+kR3CwzcVlv//vTp4MjViihOEcRHp9LUSuN3MoCJUwY1q0EMLN7zs6gzpCQ+1aNIepCo6EGb0od98CLMCpXxOKd4STaNe+rHwPaqH+BDTGxMbaW1mBaISvtXWEs+sagYzekzkhjIrXAf61EBjpyFZR8muirdx5tB5SuST1UTkisA179FP8dZjDdl7IZoE4vzwVcdGoWfsP0PuTzcWXztM/jfxpAXTlxaaRPUka+NHZan7ivt3fsKWDIxn96vlMf6Spkxl7vq/xKh7j9JmWba9b5eU+ruhCGfPux/NDR6gKlG3m11u3wRFJt8wXaHbszF9FmHb9eKk0f12qxVWFTp4NspVGUMmfi7JpY+yJ5tiXVEV2Yq0df+1lBz30e2Qbv09o9nyDwrvZE1z7Zb44DQ4jncXerCkEupmW2TGRmImL+QYLjiuMJ3PNGspBx2fLK1Oj+x/xSvCPGfYUtH7fpwxp0Ni6BiVm7RUeWKOBaV9o9P2n6V+z7Ahof/o0rMyeWPrOO+4W/0bGP0PyJzLT645QAACL5MZ6AAAAAA==", // Placeholder for Amazon
        companyName: "Amazon",
        datePosted: "8 days ago",
        post: "Solutions Architect (AWS)",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "£110,000/yr",
        location: "London, UK"
    },
    {
        brandLogo: "https://tse1.mm.bing.net/th/id/OIP.3ZAZvzn_3ypWLvFrRYN5iAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", // Placeholder for Meta
        companyName: "Meta",
        datePosted: "6 months ago",
        post: "Mobile Developer (iOS)",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$165k/yr",
        location: "New York, US"
    }
];
  return (
    <div class='parent'>
      {jobOpenings.map((val) => {
        return <Card2 brandLogo={val.brandLogo} companyName={val.companyName} datePosted={val.datePosted} post={val.post} tag1={val.tag1} tag2={val.tag2} pay={val.pay} location={val.location}/>
      })}
      
    </div>
  )
}

export default App
