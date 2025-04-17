

const scriptsInEvents = {

	async FolhaFase1_Event12_Act2(runtime, localVars)
	{
		//Obter o valor da variavel global vidas
		let vidas = runtime.globalVars.vidas;
		//Reduz uma vida
		vidas--;
		
		//Atualiza a variavel global no construct 3
		runtime.globalVars.vidas = vidas;
		
		//Se vidas chegarem a zero, execute a ação (ir para game over)
		if (vidas <= 0){
			console.log("game over");
			runtime.goToLayout("TelaGameOver")//trocar para o layout GameOver, caso exista.
		}
	},

	async FolhaFase2_Event11_Act2(runtime, localVars)
	{
		//Obter o valor da variavel global vidas
		let vidas = runtime.globalVars.vidas;
		//Reduz uma vida
		vidas--;
		
		//Atualiza a variavel global no construct 3
		runtime.globalVars.vidas = vidas;
		
		//Se vidas chegarem a zero, execute a ação (ir para game over)
		if (vidas <= 0){
			console.log("game over");
			runtime.goToLayout("TelaGameOver")//trocar para o layout GameOver, caso exista.
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
