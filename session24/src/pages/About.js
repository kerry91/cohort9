import './Pages.css';

const About = () => {
  return (
    <>
    <div class="about min-w-screen flex items-center justify-center px-5 py-40">
    <div class="rounded-lg shadow-xl bg-gray-900 text-white">
        <div class="border-b border-gray-800 px-8 py-3">
            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div class="px-8 py-6">
            <p><em class="text-blue-400">const</em> <span class="text-yellow-100">aboutMe</span> = <span class="text-yellow-300">()</span> <span class="text-blue-300">={'>'}</span> <span class="text-yellow-300">{'{'}</span> </p>
            <p>&nbsp;&nbsp;<span class="text-purple-300">return</span> <span class="text-purple-300">(</span> </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span class="text-green-300">'Kerry Warnes'</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Age: <span class="text-green-300">'31'</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Sex: <span class="text-green-300">'Female'</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Goal: <span class="text-green-300">'To become a Frontend Developer'</span>,</p>
            &nbsp;&nbsp;<span class="text-purple-300">)</span>
            <br/>
            <span class="text-yellow-300">{'}'}</span>
            ;
        </div>
    </div>
</div>
  </>
  )
};
  
  export default About;