import Link from "next/link";

const Profile = () => {
    return (
      <div className="flex flex-row items-center mb-4">
        <img className="rounded-full h-12 w-12 mr-4" src="/profile.png" />
        <h1 className="prose prose-l font-black">Christopher Bell</h1>
      </div>
    );
  };

const Template = () => {
    return (
        <div className="m-8 lg:mx-64 md:mx-32 sm:mx-16 divide-y-2 divide-purple-400">
            <div className="flex flex-col items-left justify-left mb-4">
                <h1 className="prose prose-2xl font-black">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h1>
                <p>December 25, 2022</p>
                {/* <Profile /> */}
            </div>

            <div>
                <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet laoreet elit. Curabitur rutrum eget sem vitae mattis. Aenean interdum leo magna, nec sagittis neque sodales at. Sed feugiat eleifend sem sit amet ultricies. Mauris sed ipsum rhoncus metus feugiat bibendum. In condimentum orci quis sem porttitor, quis euismod enim mollis. Etiam feugiat augue ultrices efficitur convallis. Sed ornare nulla feugiat, dignissim nisl nec, commodo odio. Morbi et quam tellus. Aliquam aliquet feugiat lorem, id vulputate leo ultrices at. Etiam orci risus, auctor sit amet lacus vel, aliquam consequat magna. Integer vulputate viverra eros.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vel dui maximus, varius elit sagittis, faucibus velit. Etiam sed ligula mattis, rhoncus ex quis, accumsan risus. Aenean ligula tortor, placerat sed pretium id, aliquam a velit. Phasellus eleifend quam dui. Suspendisse in feugiat leo. Nullam mollis tellus non eros laoreet porttitor. Cras pulvinar neque imperdiet justo tempor, id euismod erat fringilla. Mauris vitae ante ornare, commodo est a, suscipit libero.

Sed vel dictum nulla, vitae hendrerit nunc. Etiam sed fringilla quam. Integer laoreet eros sed arcu suscipit, sit amet cursus arcu gravida. Nulla risus leo, pharetra bibendum aliquam eget, eleifend a felis. Etiam eget sodales mauris, sed vestibulum velit. Etiam sit amet nisl tortor. Integer a arcu nunc. Sed eget eleifend dolor. Pellentesque eget odio massa. Cras varius mi accumsan, volutpat urna vel, efficitur ligula. Maecenas dictum tincidunt viverra. Aliquam facilisis erat et auctor hendrerit. Donec metus odio, vulputate quis lectus quis, congue facilisis ante. In a efficitur lectus, eu lobortis mi.</p>
            
                <p className="prose prose-xl font-black pt-4">Enim Nulla Aliquet</p>

                <p className="pt-4">Id velit ut tortor pretium viverra. Aenean pharetra magna ac placerat vestibulum lectus mauris. Vitae sapien pellentesque habitant morbi. Libero justo laoreet sit amet. Tincidunt id aliquet risus feugiat in ante. Pharetra convallis posuere morbi leo urna. Donec massa sapien faucibus et molestie. Nisl nisi scelerisque eu ultrices vitae auctor. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Ut etiam sit amet nisl purus in mollis. Fames ac turpis egestas integer eget. Sodales ut eu sem integer vitae justo eget magna. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Odio ut enim blandit volutpat maecenas volutpat. Viverra justo nec ultrices dui sapien eget mi proin. Integer enim neque volutpat ac tincidunt vitae. Velit euismod in pellentesque massa placerat duis ultricies. Orci phasellus egestas tellus rutrum tellus pellentesque. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Metus vulputate eu scelerisque felis imperdiet proin. Pulvinar etiam non quam lacus. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Porttitor eget dolor morbi non arcu risus quis varius quam. Massa vitae tortor condimentum lacinia. Diam vel quam elementum pulvinar etiam non quam. Pharetra massa massa ultricies mi quis hendrerit. Nunc non blandit massa enim nec. Sed vulputate odio ut enim. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            
                <p className="prose prose-xl font-black pt-4">Cursus Sit Amet Dictum</p>

                <p className="pt-4">Id velit ut tortor pretium viverra. Aenean pharetra magna ac placerat vestibulum lectus mauris. Vitae sapien pellentesque habitant morbi. Libero justo laoreet sit amet. Tincidunt id aliquet risus feugiat in ante. Pharetra convallis posuere morbi leo urna. Donec massa sapien faucibus et molestie. Nisl nisi scelerisque eu ultrices vitae auctor. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Ut etiam sit amet nisl purus in mollis. Fames ac turpis egestas integer eget. Sodales ut eu sem integer vitae justo eget magna. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Odio ut enim blandit volutpat maecenas volutpat. Viverra justo nec ultrices dui sapien eget mi proin. Integer enim neque volutpat ac tincidunt vitae. Velit euismod in pellentesque massa placerat duis ultricies. Orci phasellus egestas tellus rutrum tellus pellentesque. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Metus vulputate eu scelerisque felis imperdiet proin. Pulvinar etiam non quam lacus. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Porttitor eget dolor morbi non arcu risus quis varius quam. Massa vitae tortor condimentum lacinia. Diam vel quam elementum pulvinar etiam non quam. Pharetra massa massa ultricies mi quis hendrerit. Nunc non blandit massa enim nec. Sed vulputate odio ut enim. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>

            </div>

        {/* <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-left justify-center">

          </div>
        </div> */}
      </div>
    );
  };
  
Template.displayName = "Template";
export default Template;