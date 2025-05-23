export interface DbMapper<D, E> {
	toDomain(entity: E): D;
	toEntity(domain: D): E;
}