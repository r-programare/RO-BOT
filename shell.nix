with import <nixpkgs> {}; {
    nodeEnv = stdenv.mkDerivation {
        name = "node-environment";
        buildInputs = with pkgs; [
            nodejs-16_x
        ];
        shellHook = ''source ~/.bashrc'';
    };
}
