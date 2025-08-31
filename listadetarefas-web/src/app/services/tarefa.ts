import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaModel } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class Tarefa {
  private apiUrl = 'http://localhost:8080/api/tarefas';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<TarefaModel[]> { return this.http.get<TarefaModel[]>(this.apiUrl); }
  addTarefa(tarefa: TarefaModel): Observable<TarefaModel> { return this.http.post<TarefaModel>(this.apiUrl, tarefa); }
  updateTarefa(tarefa: TarefaModel): Observable<TarefaModel> { return this.http.put<TarefaModel>(`${this.apiUrl}/${tarefa.id}`, tarefa); }
  deleteTarefa(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}