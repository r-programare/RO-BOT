with import <nixpkgs> {}; {
    cppEnv = stdenv.mkDerivation {
        name = "python-environment";
        buildInputs = with pkgs; [
            poetry
        ];
        shellHook = ''source ~/.bashrc'';
    };
}
