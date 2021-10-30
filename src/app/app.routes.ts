import { Routes } from "@angular/router";
import { AcessoComponent } from "./acesso/acesso.component";
import { AutenticacaoGuardService } from "./autenticacao-guard.service";
import { HomeComponent } from "./home/home.component";
import { EdicaoCadastroFisioterapeutaComponent } from './fisioterapeuta/edicao-cadastro-fisioterapeuta/edicao-cadastro-fisioterapeuta.component';
import { EdicaoSenhaFisioterapeutaComponent } from './fisioterapeuta/edicao-senha-fisioterapeuta/edicao-senha-fisioterapeuta.component';
import { CadastroEdicaoPacienteComponent } from "./paciente/cadastro-edicao-paciente/cadastro-edicao-paciente.component";
import { ConsultaPacienteComponent } from './paciente/consulta-paciente/consulta-paciente.component';
import { CadastroEdicaoProntuarioComponent } from "./prontuario/cadastro-edicao-prontuario/cadastro-edicao-prontuario.component";

export const ROUTES: Routes = [
    { path: '', component: AcessoComponent },
    {
        path: 'fisio', component: HomeComponent, canActivate: [AutenticacaoGuardService],
        children: [
            { path: '', component: HomeComponent, canActivate: [AutenticacaoGuardService] },
            { path: 'atualizar-cadastro-fisioterapeuta', component: EdicaoCadastroFisioterapeutaComponent, canActivate: [AutenticacaoGuardService] },
            { path: 'atualizar-senha-fisioterapeuta', component: EdicaoSenhaFisioterapeutaComponent, canActivate: [AutenticacaoGuardService] },
            { path: 'cadastrar-paciente', component: CadastroEdicaoPacienteComponent, canActivate: [AutenticacaoGuardService] },
            { path: 'consultar-pacientes', component: ConsultaPacienteComponent, canActivate: [AutenticacaoGuardService] },
            { path: 'cadastrar-editar-prontuario', component: CadastroEdicaoProntuarioComponent, canActivate: [AutenticacaoGuardService] }
        ]
    }
]